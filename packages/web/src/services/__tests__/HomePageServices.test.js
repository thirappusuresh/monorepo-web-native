import cities from '../AllCitiesData';
import features from '../FeatureToggleData';
import { getAllCities, fetchFeatures } from '../HomePageServices';

describe('Testing HomePageServices', () => {
    it('should return correct list of cities', () => {
        expect.assertions(1);
        return getAllCities().then(allCities => expect(allCities).toEqual(cities));
    });
    it('should correctky return list of features', () => {
        expect.assertions(1);
        return fetchFeatures().then(allFeatures => expect(allFeatures).toEqual(features));
    });
});
