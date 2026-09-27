import { governmentSchemes } from '../data/schemes';
import { indianStates, indianUnionTerritories } from '../data/indianRegions';
import { getDaysUntilRegistrationEnd } from '../components/RegistrationDeadlineNotice';
import { findEligibleSchemes } from '../utils/eligibility';

describe('scheme form configuration', () => {
  it('provides scheme-specific application fields instead of a shared form', () => {
    const uniqueFormLayouts = new Set(
      governmentSchemes
        .filter((scheme) => Array.isArray(scheme.formFields) && scheme.formFields.length > 0)
        .map((scheme) => scheme.formFields.map((field) => field.name).join(','))
    );

    expect(governmentSchemes.length).toBeGreaterThan(0);
    expect(uniqueFormLayouts.size).toBeGreaterThan(1);
    expect(governmentSchemes[0].formFields.length).toBeGreaterThan(0);
  });
});

describe('Indian state selection options', () => {
  it('contains all 28 states and all 8 union territories without duplicates', () => {
    expect(indianStates).toHaveLength(28);
    expect(new Set(indianStates).size).toBe(28);
    expect(indianUnionTerritories).toHaveLength(8);
    expect(new Set(indianUnionTerritories).size).toBe(8);
  });
});

describe('registration deadline notices', () => {
  const today = new Date(2026, 8, 26);

  it('counts calendar days through the 15-day warning window', () => {
    expect(getDaysUntilRegistrationEnd('2026-09-26', today)).toBe(0);
    expect(getDaysUntilRegistrationEnd('2026-09-27', today)).toBe(1);
    expect(getDaysUntilRegistrationEnd('2026-10-11', today)).toBe(15);
  });

  it('returns negative days for expired deadlines and ignores invalid dates', () => {
    expect(getDaysUntilRegistrationEnd('2026-09-25', today)).toBe(-1);
    expect(getDaysUntilRegistrationEnd('2026-02-30', today)).toBeNull();
    expect(getDaysUntilRegistrationEnd('not-a-date', today)).toBeNull();
  });
});

describe('eligibility scheme matching', () => {
  it('returns schemes matching the submitted profile and excludes unrelated schemes', () => {
    const matches = findEligibleSchemes({
      age: 30,
      category: 'sc',
      ruralResident: true,
      farmerLandholder: true,
      notifiedCropArea: true,
      foodGrainDistrict: true,
      willingManualWork: true,
      lowIncomeBpl: true,
      regularPensionContributions: true,
      startingBusiness: true,
      woman: false
    });
    const matchedIds = matches.map((scheme) => scheme.id);

    expect(matchedIds).toEqual(expect.arrayContaining([1, 4, 7, 10, 12, 13, 14, 27, 32]));
    expect(matchedIds).not.toContain(15);
  });

  it('uses age limits and profile answers when calculating matches', () => {
    const youngAdultMatches = findEligibleSchemes({ age: 40, regularPensionContributions: true });
    const olderAdultMatches = findEligibleSchemes({ age: 41, regularPensionContributions: true });

    expect(youngAdultMatches.map((scheme) => scheme.id)).toContain(12);
    expect(olderAdultMatches.map((scheme) => scheme.id)).not.toContain(12);
    expect(findEligibleSchemes({ age: 30, noBankAccount: true, regularPensionContributions: true })
      .map((scheme) => scheme.id)).not.toContain(12);
    expect(findEligibleSchemes({ age: 22, student: true, lowIncomeBpl: true })
      .map((scheme) => scheme.id)).toEqual(expect.arrayContaining([15]));
  });

  it('requires the additional conditions stated in scheme summaries', () => {
    const partialProfile = {
      age: 30,
      ruralResident: true,
      noPuccaHouse: true,
      lowIncomeBpl: true,
      woman: true,
      student: true,
      streetVendor: true,
      childUnderFiveOrPregnant: true,
      farmerLandholder: true,
      shgMember: true,
      unorganizedWorker: true,
      eligibleHealthHousehold: true
    };
    const partialMatches = findEligibleSchemes(partialProfile).map((scheme) => scheme.id);

    expect(partialMatches).toContain(2);
    [5, 9, 12, 18, 19, 20, 28, 29, 32, 34].forEach((schemeId) => {
      expect(partialMatches).not.toContain(schemeId);
    });
    expect(findEligibleSchemes({ ruralResident: true, noPuccaHouse: true }).map((scheme) => scheme.id))
      .not.toContain(2);
  });
});
