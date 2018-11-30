import React from 'react';
import { shallow } from '../../enzyme';
import MedlifeEssentialCarouselItem from '../bodycomponents/MedlifeEssentialCarouselItem';

describe('Medlife Essential tests', () => {
    it('Medlife Essential component renders', () => {
        shallow(<MedlifeEssentialCarouselItem />);
    });
});
