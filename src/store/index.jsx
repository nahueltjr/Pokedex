import { configureStore } from '@reduxjs/toolkit'
import nameSlice from './slices/name.slice'
import numSlice from './slices/configNum.slice'

export default configureStore({
  reducer: {
        name:nameSlice,
        num:numSlice
	}
})