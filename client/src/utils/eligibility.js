import { governmentSchemes } from '../data/schemes';

const eligibilityRules = {
  1: (profile) => profile.farmerLandholder,
  2: (profile) => profile.ruralResident && profile.noPuccaHouse && profile.lowIncomeBpl,
  3: (profile) => profile.eligibleHealthHousehold,
  4: (profile) => profile.ruralResident && profile.willingManualWork,
  5: (profile) => profile.woman && profile.lowIncomeBpl && profile.noLpgConnection && profile.eligibleSchemeDistrict,
  6: (profile) => profile.age >= 18 && profile.noBankAccount,
  7: (profile) => profile.farmerLandholder && profile.notifiedCropArea,
  8: (profile) => profile.artisan,
  9: (profile) => profile.streetVendor && profile.streetVendorCertificate,
  10: (profile) => profile.startingBusiness && (profile.woman || ['sc', 'st'].includes(profile.category)),
  11: (profile) => profile.smallBusinessOwner,
  12: (profile) => profile.age >= 18 && profile.age <= 40 && !profile.noBankAccount && profile.regularPensionContributions,
  13: (profile) => profile.farmerLandholder,
  14: (profile) => profile.farmerLandholder && profile.age >= 18 && profile.age <= 40 && profile.lowIncomeBpl,
  15: (profile) => profile.student && profile.lowIncomeBpl,
  16: (profile) => profile.seekingWorkOrTraining,
  17: (profile) => profile.age >= 60 && profile.lowIncomeBpl,
  18: (profile) => profile.unorganizedWorker && profile.age >= 18 && profile.age <= 40 && profile.workerIncomeWithinLimit,
  19: (profile) => profile.childUnderFiveOrPregnant && profile.underservedArea,
  20: (profile) => profile.student && profile.ruralResident && profile.underservedArea,
  21: (profile) => profile.governmentSchoolStudent,
  22: (profile) => profile.eligibleDigitalServiceArea,
  23: (profile) => profile.rooftopHomeowner,
  24: (profile) => profile.girlChildUnderTen,
  25: (profile) => profile.priorityDistrict,
  26: (profile) => profile.woman && profile.age >= 18,
  27: (profile) => profile.ruralResident,
  28: (profile) => profile.student && profile.lowIncomeBpl && profile.meritoriousStudent,
  29: (profile) => profile.ruralResident && profile.woman && profile.shgMember && profile.eligibleSchemeDistrict,
  30: (profile) => profile.lowIncomeBpl || profile.eligibleHealthHousehold,
  31: (profile) => profile.projectOrganization,
  32: (profile) => profile.farmerLandholder && profile.foodGrainDistrict,
  33: (profile) => profile.irrigationDeficitVillage && (profile.farmerLandholder || profile.waterCommitteeMember),
  34: (profile) => profile.woman && profile.registeredMissionShg,
  35: (profile) => profile.seekingWorkOrTraining
};

export function findEligibleSchemes(profile, schemes = governmentSchemes) {
  return schemes.filter((scheme) => eligibilityRules[scheme.id]?.(profile));
}