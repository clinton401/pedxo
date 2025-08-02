import dropdownarrow from '../../assets/svg/dropdownarrow.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useGetCountries from '../../features/countriesandstates/useGetCountries'
import { useState, useEffect } from 'react'
import useGetStates from '../../features/countriesandstates/useGetStates'
import { useQueryClient } from '@tanstack/react-query'
import Button from '../Button'
import usePersonalInfoContract from '../../features/contracts/usePersonalInfoContract'
import CustomForm from '../../ui/CustomForm'
import CustomInput from '../../ui/CustomInput'

const FormOne = ({ nextStep, savedState, contractType }) => {
  const { countries, isLoading } = useGetCountries()
  const [hasChanges, setHasChanges] = useState(false)

  const selectedIso = savedState
    ? countries?.find((el) => el.name === savedState.country).iso2
    : null
  const [selectedCountry, setSelectedCountry] = useState(selectedIso || '')
  const { states, isLoading: loadingStates } = useGetStates(selectedCountry)
  const queryClient = useQueryClient()
  const { postForm, isLoading: sendingForm } = usePersonalInfoContract()

  const validationSchema = Yup.object({
    clientName: Yup.string().required('Client name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().notRequired(''),
    companyName: Yup.string().required('Company name is required'),
  })

  const initialValues = {
    clientName: savedState?.clientName || '',
    email: savedState?.email || '',
    country: savedState?.country || '',
    state: savedState?.region || '',
    companyName: savedState?.companyName || '',
  }

  // Form Integration + validation
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (!hasChanges) {
        nextStep()
        setSubmitting(false)
        return
      }

      const details = {
        clientName: values?.clientName,
        email: values?.email,
        country: values?.country,
        region: values?.state,
        companyName: values.companyName,
        contractType,
      }
      postForm(details, {
        onSuccess: () => {
          nextStep()
        },
        onSettled: () => {
          setSubmitting(false)
        },
      })
    },
  })

  // Check for changes between current values and initial values
  useEffect(() => {
    const changesDetected = Object.keys(initialValues).some(
      (key) => formik.values[key] !== initialValues[key]
    )
    setHasChanges(changesDetected)
  }, [formik.values, initialValues])

  //Basically invalidating the States query to trigger a refetch each time the country changes
  const handleCountryChange = (e) => {
    const selectedIso = e.target.value
    const selected = countries?.find((c) => c.iso2 === selectedIso)
    if (selected) {
      formik.setFieldValue('country', selected.name)
      queryClient.invalidateQueries(['states'])
      setSelectedCountry(selectedIso)
    } else {
      setSelectedCountry('')
    }
  }

  return (
    <div className='flex flex-col gap-5'>
      <div className='text-lg font-semibold leading-normal xl:text-2xl xl:mb-[18px]'>
        Personal Information
      </div>

      <CustomForm onSubmit={formik.handleSubmit}>
        <CustomInput
          label='Client Name'
          type='text'
          name='clientName'
          id='clientName'
          placeholder='John Doe'
          disabled={formik.isSubmitting || sendingForm}
          error={Boolean(formik.errors.clientName && formik.touched.clientName)}
          errorMessage={formik.errors.clientName}
          onBlur={formik.handleBlur}
          value={formik.values.clientName}
          onChange={formik.handleChange}
          required={true}
        />

        <CustomInput
          label='Email'
          type='email'
          name='email'
          disabled={formik.isSubmitting || sendingForm}
          id='email'
          placeholder='John@gmail.com'
          error={Boolean(formik.errors.email && formik.touched.email)}
          errorMessage={formik.errors.email}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          required={true}
        />

        {/* Country Dropdown */}
        <div className='flex flex-col w-full gap-1 xl:gap-4'>
          <div className='flex items-center gap-3'>
            <label
              htmlFor='country'
              className='text-sm font-semibold leading-normal '
            >
              Country <span className='text-red-500'>*</span>
            </label>
            {formik.errors.country && (
              <p className='text-sm text-red-500 italic'>
                {formik.errors.country}
              </p>
            )}
          </div>
          <div className='relative'>
            <select
              name='country'
              id='country'
              disabled={isLoading || formik.isSubmitting || sendingForm}
              onChange={handleCountryChange}
              value={
                countries?.find((c) => c.name === formik.values.country)
                  ?.iso2 || ''
              }
              className='appearance-none w-full disabled:ring-gray-300  bg-transparent ring-1 ring-[#00000033] outline-none rounded-lg  p-3 text-sm'
            >
              <option value=''>
                {isLoading ? 'Loading Countries...' : 'Select Country'}
              </option>
              {countries?.map((country) => (
                <option key={country.id} value={country.iso2}>
                  {country.name}
                </option>
              ))}
            </select>
            <div className='absolute top-[50%] right-4 transform -translate-y-1/2 pointer-events-none text-blue-600 text-2xl'>
              <img src={dropdownarrow} alt='' />
            </div>
          </div>
        </div>

        {/* State Dropdown */}
        <div className='flex flex-col w-full gap-1 xl:gap-4'>
          <label
            htmlFor='state'
            className='text-sm font-semibold leading-normal'
          >
            Region/Province/State
          </label>
          <div className='relative'>
            <select
              name='state'
              disabled={
                loadingStates ||
                !formik.values.country ||
                formik.isSubmitting ||
                sendingForm ||
                !selectedCountry
              }
              id='state'
              onChange={(e) => formik.setFieldValue('state', e.target.value)}
              value={formik.values.state}
              className='appearance-none w-full disabled:ring-gray-300  bg-transparent ring-1 ring-[#00000033] outline-none rounded-lg  p-3 text-sm '
            >
              <option value=''>
                {loadingStates
                  ? 'Loading States...'
                  : states?.length === 0
                  ? '-'
                  : 'Select State'}
              </option>
              {states?.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            <div className='absolute top-[50%] right-4 transform -translate-y-1/2 pointer-events-none text-blue-600 text-2xl'>
              <img src={dropdownarrow} alt='dropdown_icon' />
            </div>
          </div>
        </div>

        {formik.values.country && (
          <CustomInput
            label='Company Name'
            type='text'
            name='companyName'
            disabled={formik.isSubmitting || sendingForm}
            id='companyName'
            placeholder='Enter company name'
            value={formik.values.companyName}
            onChange={formik.handleChange}
            required={true}
          />
        )}
        <div>
          <Button
            isLoading={formik.isSubmitting || sendingForm}
            type='primary'
            buttonType='submit'
            disabled={!formik.isValid || formik.isSubmitting}
            size='large'
          >
            {hasChanges ? 'Save and Continue' : 'Continue'}
          </Button>
        </div>
      </CustomForm>
    </div>
  )
}

export default FormOne
