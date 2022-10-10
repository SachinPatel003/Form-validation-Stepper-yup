import * as yup from "yup";

export const ValidationSchema = [
  yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    MyRadio: yup.string().required("Please Select your Gender"),
  }),
  yup.object({
    state: yup.string().required(),
    city: yup.string().required(),
  }),
  yup.object({
    MyRating: yup.number().typeError("You must have to Rate your Skill "),
    MySlider: yup.number().typeError("intrest in Development is mandatory"),
    MyChechBOx: yup.boolean().oneOf([true], "You must have to accept T & C"),
  }),
]
