import { useState } from 'react'

export function useAdditionalInfo(onDniChange, onPhoneChange) {
  const [dni, setDni] = useState('')
  const [phone, setPhone] = useState('')
  const [dniError, setDniError] = useState('Debe tener 8 dígitos numéricos')
  const [phoneError, setPhoneError] = useState('Debe tener 9 dígitos numéricos')

  const validateDni = val => {
    setDniError(val.length === 8 ? '' : 'Debe tener 8 dígitos numéricos')
  }
  const validatePhone = val => {
    setPhoneError(val.length === 9 ? '' : 'Debe tener 9 dígitos numéricos')
  }

  const handleDniChange = e => {
    const val = e.target.value.replace(/\D/g, '')
    setDni(val)
    onDniChange(val)
    validateDni(val)
  }
  const handlePhoneChange = e => {
    const val = e.target.value.replace(/\D/g, '')
    setPhone(val)
    onPhoneChange(val)
    validatePhone(val)
  }

  const validateAll = () => {
    validateDni(dni)
    validatePhone(phone)
  }

  return {
    dni, phone,
    dniError, phoneError,
    handleDniChange, handlePhoneChange,
    validateAll
  }
}