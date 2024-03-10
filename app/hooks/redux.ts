import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

// import {RootState} from '@reduxjs/toolkit/query';
import {AppDispatch, RootState} from '@app/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
