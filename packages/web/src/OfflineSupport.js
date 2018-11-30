import { PureComponent } from 'react';

class OfflineSupport extends PureComponent {
    componentDidMount() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('../static/workbox/sw.js')
                .then(() => console.log('service worker registered.'))
                .catch(err => console.dir(err));
        }
    }

    render() {
        return null;
    }
}

export default OfflineSupport;
