import { takeLatest, call, put, all } from 'redux-saga/effects'
import { ToastActionsCreators } from 'react-native-redux-toast'

import api from '~/services/api'

import { updateProfileSuccess, updateProfileFailure } from './actions'

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data

        const profile = {
            name,
            email,
            ...(rest.oldPassword ? rest : {}),
        }

        const response = yield call(api.put, 'users', profile)

        yield put(
            ToastActionsCreators.displayInfo('Perfil atualizado com sucesso')
        )
        // toast.success('Perfil atualizado com sucesso!')

        yield put(updateProfileSuccess(response.data))
    } catch (err) {
        yield put(
            ToastActionsCreators.displayError(
                err.response
                    ? err.response.data.error
                    : 'Erro ao conectar ao servidor',
                5000
            )
        )
        // toast.error('Erro ao atualizar perfil')
        yield put(updateProfileFailure())
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)])
