"use client";
import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImagePreview);

const WritePage = () => {
  const { register, handleSubmit, reset, control, formState: { isSubmitting, errors } } = useForm();
  const [serverMessage, setServerMessage] = useState("");
  const [files, setFiles] = useState([]);

  const onSubmit = async (data) => {
    setServerMessage("");
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      if (files[0]) {
        formData.append("image", files[0].file);
      }
      await axios.post("/api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setServerMessage("Post erfolgreich erstellt!");
      reset();
      setFiles([]);
    } catch (error) {
      setServerMessage(
        error.response?.data?.message || "Fehler beim Erstellen des Posts."
      );
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg rounded-lg shadow-md p-8 space-y-6"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Neuen Post erstellen</h2>
        <div>
          <label className="block mb-2 font-medium" htmlFor="title">
            Titel
          </label>
          <input
            id="title"
            {...register("title", { required: "Titel ist erforderlich" })}
            className="w-full border rounded-md px-4 py-2"
            placeholder="Titel des Posts"
          />
          {errors.title && (
            <p className="text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="content">
            Inhalt
          </label>
          <textarea
            id="content"
            {...register("content", { required: "Inhalt ist erforderlich" })}
            className="w-full border rounded-md px-4 py-2 min-h-[120px]"
            placeholder="Schreibe deinen Post hier..."
          />
          {errors.content && (
            <p className="text-sm mt-1">{errors.content.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 font-medium">Bild hinzufügen</label>
          <Controller
            control={control}
            name="image"
            render={() => (
              <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={1}
                labelIdle='Bild hierher ziehen oder <span class="filepond--label-action">Durchsuchen</span>'
                acceptedFileTypes={["image/*"]}
                instantUpload={false}
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-md border"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Post erstellen"}
        </button>
        {serverMessage && (
          <div className="text-center mt-4">{serverMessage}</div>
        )}
      </form>
    </div>
  );
};
export default WritePage;