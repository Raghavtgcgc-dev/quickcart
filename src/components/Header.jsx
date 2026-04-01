import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart } = useCart();

  const categories = ['Electronics', 'Accessories', 'Home', 'Sports'];

  return (
    <header className="header">
      <div className="header-container">

        {/* Top Row */}
        <div className="header-top">
          <Link to="/" className="logo">🛒 QuickCart</Link>

          <button className="cart-btn" onClick={toggleCart}>
            Cart ({getTotalItems()})
          </button>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/">Home</Link>
          {categories.map(cat => (
            <Link key={cat} to={`/category/${cat}`}>
              {cat}
            </Link>
          ))}
          <Link to="/cart">Cart</Link>
        </nav>

        {/* Search */}
        <input
          className="search"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search..."
        />

      </div>
    </header>
  );
}

export default Header;