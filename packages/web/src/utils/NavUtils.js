/* eslint-disable import/prefer-default-export */
export function navigate(uri = window.location.href) {
    window.location.href = uri;
}
