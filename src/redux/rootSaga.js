import {
  all, take,
} from 'redux-saga/effects';

import {
  REHYDRATE,
} from 'redux-persist/lib/constants';

import {
  toggleDisplayQuerySettings,
  updateQuerySettingsSinceDate,
  updateQuerySettingsIncidentStatus,
  updateQuerySettingsIncidentUrgency,
  updateQuerySettingsIncidentPriority,
  updateQuerySettingsTeams,
  updateQuerySettingsServices,
  updateSearchQuery,
} from './query_settings/sagas';

import {
  getIncidentsAsync,
  getIncidentNotesAsync,
  getAllIncidentNotesAsync,
  updateIncidentsListAsync,
  filterIncidentsByPriority,
  filterIncidentsByStatus,
  filterIncidentsByUrgency,
  filterIncidentsByTeam,
  filterIncidentsByService,
  filterIncidentsByQuery,
} from './incidents/sagas';

import {
  getLogEntriesAsync,
  updateRecentLogEntriesAsync,
  cleanRecentLogEntriesAsync,
} from './log_entries/sagas';

import {
  saveIncidentTable,
  updateIncidentTableColumns,
  updateIncidentTableState,
  selectIncidentTableRows,
} from './incident_table/sagas';

import {
  acknowledgeAsync,
  escalateAsync,
  reassignAsync,
  toggleDisplayReassignModal,
  addResponderAsync,
  toggleDisplayAddResponderModal,
  snoozeAsync,
  toggleDisplayCustomSnoozeModal,
  toggleDisplayMergeModal,
  mergeAsync,
  resolveAsync,
  updatePriorityAsync,
  addNoteAsync,
  toggleDisplayAddNoteModal,
  runCustomIncidentActionAsync,
  syncWithExternalSystemAsync,
} from './incident_actions/sagas';

import {
  toggleActionAlertsModal, updateActionAlertsModal,
} from './action_alerts/sagas';

import {
  userAuthorize,
  userUnauthorize,
  userAcceptDisclaimer,
  getUsersAsync,
  getCurrentUserAsync,
} from './users/sagas';

import {
  getExtensionsAsync, mapServicesToExtensions,
} from './extensions/sagas';

import {
  getResponsePlaysAsync, runResponsePlayAsync,
} from './response_plays/sagas';

import {
  getServicesAsync,
} from './services/sagas';
import {
  getTeamsAsync,
} from './teams/sagas';
import {
  getPrioritiesAsync,
} from './priorities/sagas';
import {
  getEscalationPoliciesAsync,
} from './escalation_policies/sagas';

import {
  toggleSettingsModal, clearLocalCache,
} from './settings/sagas';

import {
  updateConnectionStatus, checkConnectionStatus, checkAbilities,
} from './connection/sagas';

export default function* rootSaga() {
  yield take(REHYDRATE); // Wait for rehydrate to prevent sagas from running with empty store
  yield all([
    // Query Settings
    toggleDisplayQuerySettings(),
    updateQuerySettingsSinceDate(),
    updateQuerySettingsIncidentStatus(),
    updateQuerySettingsIncidentUrgency(),
    updateQuerySettingsIncidentPriority(),
    updateQuerySettingsTeams(),
    updateQuerySettingsServices(),
    updateSearchQuery(),

    // Incidents
    getIncidentsAsync(),
    getIncidentNotesAsync(),
    getAllIncidentNotesAsync(),
    updateIncidentsListAsync(),
    filterIncidentsByPriority(),
    filterIncidentsByStatus(),
    filterIncidentsByUrgency(),
    filterIncidentsByTeam(),
    filterIncidentsByService(),
    filterIncidentsByQuery(),

    // Log Entries
    getLogEntriesAsync(),
    updateRecentLogEntriesAsync(),
    cleanRecentLogEntriesAsync(),

    // Incident Table
    saveIncidentTable(),
    updateIncidentTableColumns(),
    updateIncidentTableState(),
    selectIncidentTableRows(),

    // Incident Actions
    acknowledgeAsync(),
    escalateAsync(),
    reassignAsync(),
    toggleDisplayReassignModal(),
    addResponderAsync(),
    toggleDisplayAddResponderModal(),
    snoozeAsync(),
    toggleDisplayCustomSnoozeModal(),
    toggleDisplayMergeModal(),
    mergeAsync(),
    resolveAsync(),
    updatePriorityAsync(),
    addNoteAsync(),
    toggleDisplayAddNoteModal(),
    runCustomIncidentActionAsync(),
    syncWithExternalSystemAsync(),

    // Action Alerts Modal
    toggleActionAlertsModal(),
    updateActionAlertsModal(),

    // Users
    userAuthorize(),
    userUnauthorize(),
    userAcceptDisclaimer(),
    getUsersAsync(),
    getCurrentUserAsync(),

    // Services
    getServicesAsync(),

    // Teams
    getTeamsAsync(),

    // Priorities
    getPrioritiesAsync(),

    // Escalation Policies
    getEscalationPoliciesAsync(),

    // Extensions
    getExtensionsAsync(),
    mapServicesToExtensions(),

    // Response Plays
    getResponsePlaysAsync(),
    runResponsePlayAsync(),

    // Settings
    toggleSettingsModal(),
    clearLocalCache(),

    // Connection
    updateConnectionStatus(),
    checkConnectionStatus(),
    checkAbilities(),
  ]);
}
