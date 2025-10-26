import React from "react";
import { useForm } from "react-hook-form";
import styles from "./DynamicForm.module.css";

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };


  const firstValue = watch("firstField");

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    
      <div className={styles.fieldContainer}>
        <label className={styles.label}>First Field</label>
        <input
          className={styles.input}
          {...register("firstField", {
            required: "This field is required",
            minLength: {
              value: 5,
              message: "more than 5 Symbols",
            },
          })}
        />
        {errors.firstField && (
          <p className={styles.error}>{errors.firstField.message}</p>
        )}
      </div>

      {firstValue && firstValue.length >= 5 && !errors.firstField && (
        <div className={styles.fieldContainer}>
          <label className={styles.label}>Second Field</label>
          <input
            className={styles.input}
            {...register("secondField", {
              required: "This field is required",
            })}
          />
          {errors.secondField && (
            <p className={styles.error}>{errors.secondField.message}</p>
          )}
        </div>
      )}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
