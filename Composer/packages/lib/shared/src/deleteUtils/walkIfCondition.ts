// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License

import { AdaptiveActionVisitor } from './AdaptiveActionVisitor';
import { walkAdaptiveActionList } from './walkAdaptiveActionList';

export const walkIfCondition = (input, visitor: AdaptiveActionVisitor) => {
  visitor(input);

  walkAdaptiveActionList(input.actions, visitor);
  walkAdaptiveActionList(input.elseActions, visitor);
};
