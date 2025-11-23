/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupHookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter push events by branch. Valid values are: `wildcard`, `regex`, `all_branches`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#branch_filter_strategy GroupHook#branch_filter_strategy}
  */
  readonly branchFilterStrategy?: string;
  /**
  * Invoke the hook for confidential issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#confidential_issues_events GroupHook#confidential_issues_events}
  */
  readonly confidentialIssuesEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for confidential note events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#confidential_note_events GroupHook#confidential_note_events}
  */
  readonly confidentialNoteEvents?: boolean | cdktf.IResolvable;
  /**
  * Custom headers for the project webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#custom_headers GroupHook#custom_headers}
  */
  readonly customHeaders?: GroupHookCustomHeaders[] | cdktf.IResolvable;
  /**
  * Custom webhook template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#custom_webhook_template GroupHook#custom_webhook_template}
  */
  readonly customWebhookTemplate?: string;
  /**
  * Invoke the hook for deployment events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#deployment_events GroupHook#deployment_events}
  */
  readonly deploymentEvents?: boolean | cdktf.IResolvable;
  /**
  * Description of the group webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#description GroupHook#description}
  */
  readonly description?: string;
  /**
  * Invoke the hook for emoji events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#emoji_events GroupHook#emoji_events}
  */
  readonly emojiEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable SSL verification when invoking the hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#enable_ssl_verification GroupHook#enable_ssl_verification}
  */
  readonly enableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for feature flag events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#feature_flag_events GroupHook#feature_flag_events}
  */
  readonly featureFlagEvents?: boolean | cdktf.IResolvable;
  /**
  * The full path or id of the group to add the hook to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#group GroupHook#group}
  */
  readonly group: string;
  /**
  * Invoke the hook for issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#issues_events GroupHook#issues_events}
  */
  readonly issuesEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for job events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#job_events GroupHook#job_events}
  */
  readonly jobEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for merge requests events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#merge_requests_events GroupHook#merge_requests_events}
  */
  readonly mergeRequestsEvents?: boolean | cdktf.IResolvable;
  /**
  * Name of the group webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#name GroupHook#name}
  */
  readonly name?: string;
  /**
  * Invoke the hook for note events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#note_events GroupHook#note_events}
  */
  readonly noteEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for pipeline events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#pipeline_events GroupHook#pipeline_events}
  */
  readonly pipelineEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#push_events GroupHook#push_events}
  */
  readonly pushEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for push events on matching branches only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#push_events_branch_filter GroupHook#push_events_branch_filter}
  */
  readonly pushEventsBranchFilter?: string;
  /**
  * Invoke the hook for release events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#releases_events GroupHook#releases_events}
  */
  readonly releasesEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for subgroup events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#subgroup_events GroupHook#subgroup_events}
  */
  readonly subgroupEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for tag push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#tag_push_events GroupHook#tag_push_events}
  */
  readonly tagPushEvents?: boolean | cdktf.IResolvable;
  /**
  * A token to present when invoking the hook. The token is not available for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#token GroupHook#token}
  */
  readonly token?: string;
  /**
  * The url of the hook to invoke. Forces re-creation to preserve `token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#url GroupHook#url}
  */
  readonly url: string;
  /**
  * Invoke the hook for wiki page events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#wiki_page_events GroupHook#wiki_page_events}
  */
  readonly wikiPageEvents?: boolean | cdktf.IResolvable;
}
export interface GroupHookCustomHeaders {
  /**
  * Key of the custom header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#key GroupHook#key}
  */
  readonly key: string;
  /**
  * Value of the custom header. This value cannot be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#value GroupHook#value}
  */
  readonly value: string;
}

export function groupHookCustomHeadersToTerraform(struct?: GroupHookCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function groupHookCustomHeadersToHclTerraform(struct?: GroupHookCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupHookCustomHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GroupHookCustomHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupHookCustomHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GroupHookCustomHeadersList extends cdktf.ComplexList {
  public internalValue? : GroupHookCustomHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GroupHookCustomHeadersOutputReference {
    return new GroupHookCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook gitlab_group_hook}
*/
export class GroupHook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupHook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupHook to import
  * @param importFromId The id of the existing GroupHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook gitlab_group_hook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupHookConfig
  */
  public constructor(scope: Construct, id: string, config: GroupHookConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_hook',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.6.1',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branchFilterStrategy = config.branchFilterStrategy;
    this._confidentialIssuesEvents = config.confidentialIssuesEvents;
    this._confidentialNoteEvents = config.confidentialNoteEvents;
    this._customHeaders.internalValue = config.customHeaders;
    this._customWebhookTemplate = config.customWebhookTemplate;
    this._deploymentEvents = config.deploymentEvents;
    this._description = config.description;
    this._emojiEvents = config.emojiEvents;
    this._enableSslVerification = config.enableSslVerification;
    this._featureFlagEvents = config.featureFlagEvents;
    this._group = config.group;
    this._issuesEvents = config.issuesEvents;
    this._jobEvents = config.jobEvents;
    this._mergeRequestsEvents = config.mergeRequestsEvents;
    this._name = config.name;
    this._noteEvents = config.noteEvents;
    this._pipelineEvents = config.pipelineEvents;
    this._pushEvents = config.pushEvents;
    this._pushEventsBranchFilter = config.pushEventsBranchFilter;
    this._releasesEvents = config.releasesEvents;
    this._subgroupEvents = config.subgroupEvents;
    this._tagPushEvents = config.tagPushEvents;
    this._token = config.token;
    this._url = config.url;
    this._wikiPageEvents = config.wikiPageEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_filter_strategy - computed: true, optional: true, required: false
  private _branchFilterStrategy?: string; 
  public get branchFilterStrategy() {
    return this.getStringAttribute('branch_filter_strategy');
  }
  public set branchFilterStrategy(value: string) {
    this._branchFilterStrategy = value;
  }
  public resetBranchFilterStrategy() {
    this._branchFilterStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchFilterStrategyInput() {
    return this._branchFilterStrategy;
  }

  // confidential_issues_events - computed: true, optional: true, required: false
  private _confidentialIssuesEvents?: boolean | cdktf.IResolvable; 
  public get confidentialIssuesEvents() {
    return this.getBooleanAttribute('confidential_issues_events');
  }
  public set confidentialIssuesEvents(value: boolean | cdktf.IResolvable) {
    this._confidentialIssuesEvents = value;
  }
  public resetConfidentialIssuesEvents() {
    this._confidentialIssuesEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialIssuesEventsInput() {
    return this._confidentialIssuesEvents;
  }

  // confidential_note_events - computed: true, optional: true, required: false
  private _confidentialNoteEvents?: boolean | cdktf.IResolvable; 
  public get confidentialNoteEvents() {
    return this.getBooleanAttribute('confidential_note_events');
  }
  public set confidentialNoteEvents(value: boolean | cdktf.IResolvable) {
    this._confidentialNoteEvents = value;
  }
  public resetConfidentialNoteEvents() {
    this._confidentialNoteEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNoteEventsInput() {
    return this._confidentialNoteEvents;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders = new GroupHookCustomHeadersList(this, "custom_headers", false);
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: GroupHookCustomHeaders[] | cdktf.IResolvable) {
    this._customHeaders.internalValue = value;
  }
  public resetCustomHeaders() {
    this._customHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders.internalValue;
  }

  // custom_webhook_template - computed: true, optional: true, required: false
  private _customWebhookTemplate?: string; 
  public get customWebhookTemplate() {
    return this.getStringAttribute('custom_webhook_template');
  }
  public set customWebhookTemplate(value: string) {
    this._customWebhookTemplate = value;
  }
  public resetCustomWebhookTemplate() {
    this._customWebhookTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customWebhookTemplateInput() {
    return this._customWebhookTemplate;
  }

  // deployment_events - computed: true, optional: true, required: false
  private _deploymentEvents?: boolean | cdktf.IResolvable; 
  public get deploymentEvents() {
    return this.getBooleanAttribute('deployment_events');
  }
  public set deploymentEvents(value: boolean | cdktf.IResolvable) {
    this._deploymentEvents = value;
  }
  public resetDeploymentEvents() {
    this._deploymentEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentEventsInput() {
    return this._deploymentEvents;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // emoji_events - computed: true, optional: true, required: false
  private _emojiEvents?: boolean | cdktf.IResolvable; 
  public get emojiEvents() {
    return this.getBooleanAttribute('emoji_events');
  }
  public set emojiEvents(value: boolean | cdktf.IResolvable) {
    this._emojiEvents = value;
  }
  public resetEmojiEvents() {
    this._emojiEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emojiEventsInput() {
    return this._emojiEvents;
  }

  // enable_ssl_verification - computed: true, optional: true, required: false
  private _enableSslVerification?: boolean | cdktf.IResolvable; 
  public get enableSslVerification() {
    return this.getBooleanAttribute('enable_ssl_verification');
  }
  public set enableSslVerification(value: boolean | cdktf.IResolvable) {
    this._enableSslVerification = value;
  }
  public resetEnableSslVerification() {
    this._enableSslVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslVerificationInput() {
    return this._enableSslVerification;
  }

  // feature_flag_events - computed: true, optional: true, required: false
  private _featureFlagEvents?: boolean | cdktf.IResolvable; 
  public get featureFlagEvents() {
    return this.getBooleanAttribute('feature_flag_events');
  }
  public set featureFlagEvents(value: boolean | cdktf.IResolvable) {
    this._featureFlagEvents = value;
  }
  public resetFeatureFlagEvents() {
    this._featureFlagEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagEventsInput() {
    return this._featureFlagEvents;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // hook_id - computed: true, optional: false, required: false
  public get hookId() {
    return this.getNumberAttribute('hook_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issues_events - computed: true, optional: true, required: false
  private _issuesEvents?: boolean | cdktf.IResolvable; 
  public get issuesEvents() {
    return this.getBooleanAttribute('issues_events');
  }
  public set issuesEvents(value: boolean | cdktf.IResolvable) {
    this._issuesEvents = value;
  }
  public resetIssuesEvents() {
    this._issuesEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesEventsInput() {
    return this._issuesEvents;
  }

  // job_events - computed: true, optional: true, required: false
  private _jobEvents?: boolean | cdktf.IResolvable; 
  public get jobEvents() {
    return this.getBooleanAttribute('job_events');
  }
  public set jobEvents(value: boolean | cdktf.IResolvable) {
    this._jobEvents = value;
  }
  public resetJobEvents() {
    this._jobEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobEventsInput() {
    return this._jobEvents;
  }

  // merge_requests_events - computed: true, optional: true, required: false
  private _mergeRequestsEvents?: boolean | cdktf.IResolvable; 
  public get mergeRequestsEvents() {
    return this.getBooleanAttribute('merge_requests_events');
  }
  public set mergeRequestsEvents(value: boolean | cdktf.IResolvable) {
    this._mergeRequestsEvents = value;
  }
  public resetMergeRequestsEvents() {
    this._mergeRequestsEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestsEventsInput() {
    return this._mergeRequestsEvents;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // note_events - computed: true, optional: true, required: false
  private _noteEvents?: boolean | cdktf.IResolvable; 
  public get noteEvents() {
    return this.getBooleanAttribute('note_events');
  }
  public set noteEvents(value: boolean | cdktf.IResolvable) {
    this._noteEvents = value;
  }
  public resetNoteEvents() {
    this._noteEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteEventsInput() {
    return this._noteEvents;
  }

  // pipeline_events - computed: true, optional: true, required: false
  private _pipelineEvents?: boolean | cdktf.IResolvable; 
  public get pipelineEvents() {
    return this.getBooleanAttribute('pipeline_events');
  }
  public set pipelineEvents(value: boolean | cdktf.IResolvable) {
    this._pipelineEvents = value;
  }
  public resetPipelineEvents() {
    this._pipelineEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineEventsInput() {
    return this._pipelineEvents;
  }

  // push_events - computed: true, optional: true, required: false
  private _pushEvents?: boolean | cdktf.IResolvable; 
  public get pushEvents() {
    return this.getBooleanAttribute('push_events');
  }
  public set pushEvents(value: boolean | cdktf.IResolvable) {
    this._pushEvents = value;
  }
  public resetPushEvents() {
    this._pushEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEventsInput() {
    return this._pushEvents;
  }

  // push_events_branch_filter - computed: true, optional: true, required: false
  private _pushEventsBranchFilter?: string; 
  public get pushEventsBranchFilter() {
    return this.getStringAttribute('push_events_branch_filter');
  }
  public set pushEventsBranchFilter(value: string) {
    this._pushEventsBranchFilter = value;
  }
  public resetPushEventsBranchFilter() {
    this._pushEventsBranchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEventsBranchFilterInput() {
    return this._pushEventsBranchFilter;
  }

  // releases_events - computed: true, optional: true, required: false
  private _releasesEvents?: boolean | cdktf.IResolvable; 
  public get releasesEvents() {
    return this.getBooleanAttribute('releases_events');
  }
  public set releasesEvents(value: boolean | cdktf.IResolvable) {
    this._releasesEvents = value;
  }
  public resetReleasesEvents() {
    this._releasesEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasesEventsInput() {
    return this._releasesEvents;
  }

  // subgroup_events - computed: true, optional: true, required: false
  private _subgroupEvents?: boolean | cdktf.IResolvable; 
  public get subgroupEvents() {
    return this.getBooleanAttribute('subgroup_events');
  }
  public set subgroupEvents(value: boolean | cdktf.IResolvable) {
    this._subgroupEvents = value;
  }
  public resetSubgroupEvents() {
    this._subgroupEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subgroupEventsInput() {
    return this._subgroupEvents;
  }

  // tag_push_events - computed: true, optional: true, required: false
  private _tagPushEvents?: boolean | cdktf.IResolvable; 
  public get tagPushEvents() {
    return this.getBooleanAttribute('tag_push_events');
  }
  public set tagPushEvents(value: boolean | cdktf.IResolvable) {
    this._tagPushEvents = value;
  }
  public resetTagPushEvents() {
    this._tagPushEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPushEventsInput() {
    return this._tagPushEvents;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // wiki_page_events - computed: true, optional: true, required: false
  private _wikiPageEvents?: boolean | cdktf.IResolvable; 
  public get wikiPageEvents() {
    return this.getBooleanAttribute('wiki_page_events');
  }
  public set wikiPageEvents(value: boolean | cdktf.IResolvable) {
    this._wikiPageEvents = value;
  }
  public resetWikiPageEvents() {
    this._wikiPageEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wikiPageEventsInput() {
    return this._wikiPageEvents;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_filter_strategy: cdktf.stringToTerraform(this._branchFilterStrategy),
      confidential_issues_events: cdktf.booleanToTerraform(this._confidentialIssuesEvents),
      confidential_note_events: cdktf.booleanToTerraform(this._confidentialNoteEvents),
      custom_headers: cdktf.listMapper(groupHookCustomHeadersToTerraform, false)(this._customHeaders.internalValue),
      custom_webhook_template: cdktf.stringToTerraform(this._customWebhookTemplate),
      deployment_events: cdktf.booleanToTerraform(this._deploymentEvents),
      description: cdktf.stringToTerraform(this._description),
      emoji_events: cdktf.booleanToTerraform(this._emojiEvents),
      enable_ssl_verification: cdktf.booleanToTerraform(this._enableSslVerification),
      feature_flag_events: cdktf.booleanToTerraform(this._featureFlagEvents),
      group: cdktf.stringToTerraform(this._group),
      issues_events: cdktf.booleanToTerraform(this._issuesEvents),
      job_events: cdktf.booleanToTerraform(this._jobEvents),
      merge_requests_events: cdktf.booleanToTerraform(this._mergeRequestsEvents),
      name: cdktf.stringToTerraform(this._name),
      note_events: cdktf.booleanToTerraform(this._noteEvents),
      pipeline_events: cdktf.booleanToTerraform(this._pipelineEvents),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      push_events_branch_filter: cdktf.stringToTerraform(this._pushEventsBranchFilter),
      releases_events: cdktf.booleanToTerraform(this._releasesEvents),
      subgroup_events: cdktf.booleanToTerraform(this._subgroupEvents),
      tag_push_events: cdktf.booleanToTerraform(this._tagPushEvents),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      wiki_page_events: cdktf.booleanToTerraform(this._wikiPageEvents),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch_filter_strategy: {
        value: cdktf.stringToHclTerraform(this._branchFilterStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidential_issues_events: {
        value: cdktf.booleanToHclTerraform(this._confidentialIssuesEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      confidential_note_events: {
        value: cdktf.booleanToHclTerraform(this._confidentialNoteEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_headers: {
        value: cdktf.listMapperHcl(groupHookCustomHeadersToHclTerraform, false)(this._customHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupHookCustomHeadersList",
      },
      custom_webhook_template: {
        value: cdktf.stringToHclTerraform(this._customWebhookTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_events: {
        value: cdktf.booleanToHclTerraform(this._deploymentEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emoji_events: {
        value: cdktf.booleanToHclTerraform(this._emojiEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ssl_verification: {
        value: cdktf.booleanToHclTerraform(this._enableSslVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature_flag_events: {
        value: cdktf.booleanToHclTerraform(this._featureFlagEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issues_events: {
        value: cdktf.booleanToHclTerraform(this._issuesEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      job_events: {
        value: cdktf.booleanToHclTerraform(this._jobEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      merge_requests_events: {
        value: cdktf.booleanToHclTerraform(this._mergeRequestsEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note_events: {
        value: cdktf.booleanToHclTerraform(this._noteEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pipeline_events: {
        value: cdktf.booleanToHclTerraform(this._pipelineEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      push_events: {
        value: cdktf.booleanToHclTerraform(this._pushEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      push_events_branch_filter: {
        value: cdktf.stringToHclTerraform(this._pushEventsBranchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      releases_events: {
        value: cdktf.booleanToHclTerraform(this._releasesEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subgroup_events: {
        value: cdktf.booleanToHclTerraform(this._subgroupEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_push_events: {
        value: cdktf.booleanToHclTerraform(this._tagPushEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiki_page_events: {
        value: cdktf.booleanToHclTerraform(this._wikiPageEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
