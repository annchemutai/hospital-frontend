// validationRules.js

export const required = (value) => {
  return !!value || 'This field is required'
}

export const number = (value) => {
  return !isNaN(value) || 'Please enter a valid number'
}

export const weightRule = (value) => {
  if (!value) return 'Weight is required'
  if (isNaN(value)) return 'Weight must be a number'

  const weight = Number(value)

  if (weight <= 0) return 'Weight must be greater than 0'
  if (weight > 500) return 'Please enter a valid weight'

  return true
}

export const heightRule = (value) => {
  if (!value) return 'Height is required'
  if (isNaN(value)) return 'Height must be a number'

  const height = Number(value)

  if (height <= 0) return 'Height must be greater than 0'
  if (height > 300) return 'Please enter a valid height'

  return true
}

export const pulseRule = (value) => {
  if (!value) return 'Pulse rate is required'
  if (isNaN(value)) return 'Pulse rate must be a number'

  const pulse = Number(value)

  if (pulse <= 0) return 'Pulse rate must be greater than 0'
  if (pulse > 250) return 'Please enter a valid pulse rate'

  return true
}

export const temperatureRule = (value) => {
  if (!value) {
    return 'Temperature is required'
  }

  if (isNaN(value)) {
    return 'Temperature must be a number'
  }

  if (Number(value) < 25 || Number(value) > 45) {
    return 'Please enter a valid temperature'
  }

  return true
}

export const bloodPressureRule = (value) => {
  if (!value) return 'Blood pressure is required'

  const pattern = /^\d{2,3}\/\d{2,3}$/

  if (!pattern.test(value)) {
    return 'Use the format 120/80'
  }

  return true
}

export const maxDateRule = (value) => {
  if (!value) return true

  const today = new Date().toISOString().split('T')[0]

  return value <= today || 'Date cannot be in the future'
}

export const minDateRule = (value) => {
  if (!value) return true

  const today = new Date().toISOString().split('T')[0]

  return value >= today || `Date cannot be before ${today}`
}

export const minDate = () => {
  return new Date().toISOString().split('T')[0]
}