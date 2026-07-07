/**
 * Session adapters barrel — importing this registers every tool adapter into
 * the shared registry. The `session` command imports from here.
 */
import { registerSessionAdapter } from './canonical.js';
import { copilotAdapter } from './copilot.js';
import { claudeAdapter } from './claude.js';
import { gitagentAdapter } from './gitagent.js';

registerSessionAdapter(copilotAdapter);
registerSessionAdapter(claudeAdapter);
registerSessionAdapter(gitagentAdapter);

export * from './canonical.js';
