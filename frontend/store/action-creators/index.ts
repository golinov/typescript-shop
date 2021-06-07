import * as ProductActionCreators from './product'
import * as UserActionCreators from './auth'

export default {
    ...ProductActionCreators,
    ...UserActionCreators
}