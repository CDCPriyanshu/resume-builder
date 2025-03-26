

import { createSlice } from '@reduxjs/toolkit'

const FormDataSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
  },
})
export const selectUserData = (state) => state.user.userData
export const { setUserData } = FormDataSlice.actions
export default FormDataSlice.reducer

const experience = {
  experienceData: null,
}

const education = {
  educationData: null,
}

const ExperienceSlice = createSlice({
  name: 'experience',
  initialState: experience,
  reducers: {
    setExperienceData: (state, action) => {
      state.experienceData = action.payload
    },
  },
})

// for experience
export const selectExperienceData = (state) =>
  state.experience.experienceData
export const { setExperienceData } = ExperienceSlice.actions
export const ExperienceDataReducer = ExperienceSlice.reducer

const EducationSlice = createSlice({
  name: 'education',
  initialState: education,
  reducers: {
    setEducationData: (state, action) => {
      state.educationData = action.payload
    },
    deleteEducationData: (state, action) => {
      state.educationData = state.educationData.filter(
        (_, index) => index !== action.payload
      )
    },
  },
})

// for education
export const selectEducationData = (state) =>
  state.education.educationData
export const { setEducationData, deleteEducationData } = EducationSlice.actions
export const EducationDataReducer = EducationSlice.reducer





