import React, { useState } from "react";
import { Grid } from "../BuilderForm";
import Input from "@elements/Input";
import TextArea from "@components/elements/TextArea";
import { Button, Toggle, Uploader } from "rsuite";
import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";
import { useStore } from "@utils/store";

const About = () => {
  const { formValues, setFormValues } = useStore();
  const [removeImage, setRemoveImage] = useState(!formValues.image);

  return (
    <>
      <div className="w-full">
        <div className="flex gap-4 items-center">
          <h5>Remove Image</h5>

          <Toggle
            checked={removeImage}
            onChange={(value) => {
              setFormValues({
                ...formValues,
                image: !value ? "/assets/profile-photo.jpg" : "",
              });

              setRemoveImage(value);
            }}
          />
        </div>

        {!removeImage && (
          <Uploader
            action=""
            multiple={false}
            onChange={(e) => {
              const image = URL.createObjectURL(e[0]?.blobFile!);

              setFormValues({
                ...formValues,
                image,
              });
            }}
            listType="picture"
            draggable
          >
            <Button type="button" className="!w-full">
              <CameraRetroIcon />
            </Button>
          </Uploader>
        )}
      </div>

      <Grid>
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your Full Name"
        />

        <Input label="Role" name="role" placeholder="Enter your Role" />

        <Input
          label="Email"
          name="email"
          itemType="email"
          placeholder="Enter your Email"
        />

        <Input
          label="Phone"
          name="phone"
          placeholder="Enter your Phone Number"
          type="number"
        />
        <Input
          label="Address"
          name="address"
          placeholder="Enter your Address"
        />

        <Input
          label="LinkedIn"
          name="linkedin"
          placeholder="Enter your LinkedIn URL"
        />

        <Input
          label="GitHub"
          name="github"
          placeholder="Enter your GitHub URL"
        />
      </Grid>

      <TextArea
        label="Objective"
        name="objective"
        placeholder="Write about your objective"
      />
    </>
  );
};

export default About;
