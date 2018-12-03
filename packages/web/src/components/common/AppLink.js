import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function AppLink(props) {
    const {
        label,
        href,
        className,
        prefetch,
        passHref,
    } = props;

    return (
        <Link
            passHref={passHref}
            prefetch={prefetch}
            href={href}
        >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={className}>
                {label}
            </a>
        </Link>
    );
}

AppLink.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
    prefetch: PropTypes.bool,
    passHref: PropTypes.bool,
};

AppLink.defaultProps = {
    label: '',
    className: '',
    prefetch: true,
    passHref: false,
};
