import { PADDING_BASE } from 'consts'

export default {
    colors: {
        black: '#12153D',
        white: '#fff',
        grey: 'rgba(18, 21, 61, 0.15)',
        greyDark: '#9A9BB3',
        green: '#51CF66',
        purple: '#8D90D6',
        pink: '#FF2C55',
        background: '#1D1E27',
        elevation: '#2F315E',
        textPrimary: 'rgba(255,255,255,0.87)',
        textSecondary: 'rgba(255,255,255,0.60)'
    },
    setSpacing: increment => PADDING_BASE * increment,

    borderRadius: 4,

    boxShadow: {
        one: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
        }
    },

    fontWeight: {
        semiBold: {
            // fontFamily: 'Montserrat-SemiBold',
            fontWeight: '600'
        },
        medium: {
            // fontFamily: 'Montserrat-Medium',
            fontWeight: '500'
        },
        regular: {
            // fontFamily: 'Montserrat-Regular',
            fontWeight: '400'
        }
    }
}
