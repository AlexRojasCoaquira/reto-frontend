import { describe, test } from 'vitest'
import { render } from '@testing-library/react'
import { InsurancePage } from '../pages/Insurance'

describe('Insurance', () => {
  test('login insurance to select plans', () => {
    render(<InsurancePage />)
  })
})
