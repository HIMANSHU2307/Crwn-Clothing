import React from 'react';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

const CartIcon = ({toggleCartHidden}) => {
    // { toggleCartHidden } = this.props.toggleCartHidden /// toggleCartHidden = this.props
    return (
        <button className="cart-icon" onClick={ toggleCartHidden }>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
    /// toggleCartHidden is treated as props
})

export default connect(null, mapDispatchToProps)(CartIcon);