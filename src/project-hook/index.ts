/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectHookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Invoke the hook for confidential issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#confidential_issues_events ProjectHook#confidential_issues_events}
  */
  readonly confidentialIssuesEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for confidential note events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#confidential_note_events ProjectHook#confidential_note_events}
  */
  readonly confidentialNoteEvents?: boolean | cdktf.IResolvable;
  /**
  * Custom headers for the project webhook. Available from GitLab 17.1 onwards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#custom_headers ProjectHook#custom_headers}
  */
  readonly customHeaders?: ProjectHookCustomHeaders[] | cdktf.IResolvable;
  /**
  * Custom webhook template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#custom_webhook_template ProjectHook#custom_webhook_template}
  */
  readonly customWebhookTemplate?: string;
  /**
  * Invoke the hook for deployment events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#deployment_events ProjectHook#deployment_events}
  */
  readonly deploymentEvents?: boolean | cdktf.IResolvable;
  /**
  * Description of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#description ProjectHook#description}
  */
  readonly description?: string;
  /**
  * Enable SSL verification when invoking the hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#enable_ssl_verification ProjectHook#enable_ssl_verification}
  */
  readonly enableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#issues_events ProjectHook#issues_events}
  */
  readonly issuesEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for job events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#job_events ProjectHook#job_events}
  */
  readonly jobEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for merge requests events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#merge_requests_events ProjectHook#merge_requests_events}
  */
  readonly mergeRequestsEvents?: boolean | cdktf.IResolvable;
  /**
  * Name of the project webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#name ProjectHook#name}
  */
  readonly name?: string;
  /**
  * Invoke the hook for note events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#note_events ProjectHook#note_events}
  */
  readonly noteEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for pipeline events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#pipeline_events ProjectHook#pipeline_events}
  */
  readonly pipelineEvents?: boolean | cdktf.IResolvable;
  /**
  * The name or id of the project to add the hook to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#project ProjectHook#project}
  */
  readonly project: string;
  /**
  * Invoke the hook for push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#push_events ProjectHook#push_events}
  */
  readonly pushEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for push events on matching branches only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#push_events_branch_filter ProjectHook#push_events_branch_filter}
  */
  readonly pushEventsBranchFilter?: string;
  /**
  * Invoke the hook for release events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#releases_events ProjectHook#releases_events}
  */
  readonly releasesEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for project access token expiry events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#resource_access_token_events ProjectHook#resource_access_token_events}
  */
  readonly resourceAccessTokenEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for tag push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#tag_push_events ProjectHook#tag_push_events}
  */
  readonly tagPushEvents?: boolean | cdktf.IResolvable;
  /**
  * A token to present when invoking the hook. The token is not available for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#token ProjectHook#token}
  */
  readonly token?: string;
  /**
  * The url of the hook to invoke. Forces re-creation to preserve `token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#url ProjectHook#url}
  */
  readonly url: string;
  /**
  * Invoke the hook for wiki page events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#wiki_page_events ProjectHook#wiki_page_events}
  */
  readonly wikiPageEvents?: boolean | cdktf.IResolvable;
}
export interface ProjectHookCustomHeaders {
  /**
  * Key of the custom header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#key ProjectHook#key}
  */
  readonly key: string;
  /**
  * Value of the custom header. This value cannot be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#value ProjectHook#value}
  */
  readonly value: string;
}

export function projectHookCustomHeadersToTerraform(struct?: ProjectHookCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectHookCustomHeadersToHclTerraform(struct?: ProjectHookCustomHeaders | cdktf.IResolvable): any {
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

export class ProjectHookCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectHookCustomHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProjectHookCustomHeaders | cdktf.IResolvable | undefined) {
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

export class ProjectHookCustomHeadersList extends cdktf.ComplexList {
  public internalValue? : ProjectHookCustomHeaders[] | cdktf.IResolvable

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
  public get(index: number): ProjectHookCustomHeadersOutputReference {
    return new ProjectHookCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook gitlab_project_hook}
*/
export class ProjectHook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectHook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectHook to import
  * @param importFromId The id of the existing ProjectHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook gitlab_project_hook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectHookConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectHookConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_hook',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.5.0',
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
    this._confidentialIssuesEvents = config.confidentialIssuesEvents;
    this._confidentialNoteEvents = config.confidentialNoteEvents;
    this._customHeaders.internalValue = config.customHeaders;
    this._customWebhookTemplate = config.customWebhookTemplate;
    this._deploymentEvents = config.deploymentEvents;
    this._description = config.description;
    this._enableSslVerification = config.enableSslVerification;
    this._issuesEvents = config.issuesEvents;
    this._jobEvents = config.jobEvents;
    this._mergeRequestsEvents = config.mergeRequestsEvents;
    this._name = config.name;
    this._noteEvents = config.noteEvents;
    this._pipelineEvents = config.pipelineEvents;
    this._project = config.project;
    this._pushEvents = config.pushEvents;
    this._pushEventsBranchFilter = config.pushEventsBranchFilter;
    this._releasesEvents = config.releasesEvents;
    this._resourceAccessTokenEvents = config.resourceAccessTokenEvents;
    this._tagPushEvents = config.tagPushEvents;
    this._token = config.token;
    this._url = config.url;
    this._wikiPageEvents = config.wikiPageEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _customHeaders = new ProjectHookCustomHeadersList(this, "custom_headers", false);
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: ProjectHookCustomHeaders[] | cdktf.IResolvable) {
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
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

  // resource_access_token_events - computed: true, optional: true, required: false
  private _resourceAccessTokenEvents?: boolean | cdktf.IResolvable; 
  public get resourceAccessTokenEvents() {
    return this.getBooleanAttribute('resource_access_token_events');
  }
  public set resourceAccessTokenEvents(value: boolean | cdktf.IResolvable) {
    this._resourceAccessTokenEvents = value;
  }
  public resetResourceAccessTokenEvents() {
    this._resourceAccessTokenEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccessTokenEventsInput() {
    return this._resourceAccessTokenEvents;
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
      confidential_issues_events: cdktf.booleanToTerraform(this._confidentialIssuesEvents),
      confidential_note_events: cdktf.booleanToTerraform(this._confidentialNoteEvents),
      custom_headers: cdktf.listMapper(projectHookCustomHeadersToTerraform, false)(this._customHeaders.internalValue),
      custom_webhook_template: cdktf.stringToTerraform(this._customWebhookTemplate),
      deployment_events: cdktf.booleanToTerraform(this._deploymentEvents),
      description: cdktf.stringToTerraform(this._description),
      enable_ssl_verification: cdktf.booleanToTerraform(this._enableSslVerification),
      issues_events: cdktf.booleanToTerraform(this._issuesEvents),
      job_events: cdktf.booleanToTerraform(this._jobEvents),
      merge_requests_events: cdktf.booleanToTerraform(this._mergeRequestsEvents),
      name: cdktf.stringToTerraform(this._name),
      note_events: cdktf.booleanToTerraform(this._noteEvents),
      pipeline_events: cdktf.booleanToTerraform(this._pipelineEvents),
      project: cdktf.stringToTerraform(this._project),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      push_events_branch_filter: cdktf.stringToTerraform(this._pushEventsBranchFilter),
      releases_events: cdktf.booleanToTerraform(this._releasesEvents),
      resource_access_token_events: cdktf.booleanToTerraform(this._resourceAccessTokenEvents),
      tag_push_events: cdktf.booleanToTerraform(this._tagPushEvents),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      wiki_page_events: cdktf.booleanToTerraform(this._wikiPageEvents),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
        value: cdktf.listMapperHcl(projectHookCustomHeadersToHclTerraform, false)(this._customHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectHookCustomHeadersList",
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
      enable_ssl_verification: {
        value: cdktf.booleanToHclTerraform(this._enableSslVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      resource_access_token_events: {
        value: cdktf.booleanToHclTerraform(this._resourceAccessTokenEvents),
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
