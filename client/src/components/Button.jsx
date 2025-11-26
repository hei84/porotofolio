import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  as: Component = 'a',
  href,
  onClick,
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  target,
  rel,
  type = 'button'
}) => {
  const isLink = Component === 'a' || !!href;
  const baseProps = isLink
    ? { href: href || '#', target, rel }
    : { type, onClick };

  return (
    <Component
      {...baseProps}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={!isLink ? onClick : undefined}
    >
      <span>{children}</span>
      {Icon ? <Icon size={18} /> : null}
    </Component>
  );
};

Button.propTypes = {
  as: PropTypes.elementType,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  icon: PropTypes.elementType,
  className: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;

