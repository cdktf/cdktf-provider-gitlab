// https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectHookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Invoke the hook for confidential issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#confidential_issues_events ProjectHook#confidential_issues_events}
  */
  readonly confidentialIssuesEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for confidential notes events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#confidential_note_events ProjectHook#confidential_note_events}
  */
  readonly confidentialNoteEvents?: boolean | cdktf.IResolvable;
  /**
  * Set a custom webhook template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#custom_webhook_template ProjectHook#custom_webhook_template}
  */
  readonly customWebhookTemplate?: string;
  /**
  * Invoke the hook for deployment events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#deployment_events ProjectHook#deployment_events}
  */
  readonly deploymentEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable ssl verification when invoking the hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#enable_ssl_verification ProjectHook#enable_ssl_verification}
  */
  readonly enableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#id ProjectHook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Invoke the hook for issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#issues_events ProjectHook#issues_events}
  */
  readonly issuesEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for job events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#job_events ProjectHook#job_events}
  */
  readonly jobEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for merge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#merge_requests_events ProjectHook#merge_requests_events}
  */
  readonly mergeRequestsEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for notes events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#note_events ProjectHook#note_events}
  */
  readonly noteEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for pipeline events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#pipeline_events ProjectHook#pipeline_events}
  */
  readonly pipelineEvents?: boolean | cdktf.IResolvable;
  /**
  * The name or id of the project to add the hook to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#project ProjectHook#project}
  */
  readonly project: string;
  /**
  * Invoke the hook for push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#push_events ProjectHook#push_events}
  */
  readonly pushEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for push events on matching branches only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#push_events_branch_filter ProjectHook#push_events_branch_filter}
  */
  readonly pushEventsBranchFilter?: string;
  /**
  * Invoke the hook for releases events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#releases_events ProjectHook#releases_events}
  */
  readonly releasesEvents?: boolean | cdktf.IResolvable;
  /**
  * Invoke the hook for tag push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#tag_push_events ProjectHook#tag_push_events}
  */
  readonly tagPushEvents?: boolean | cdktf.IResolvable;
  /**
  * A token to present when invoking the hook. The token is not available for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#token ProjectHook#token}
  */
  readonly token?: string;
  /**
  * The url of the hook to invoke. Forces re-creation to preserve `token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#url ProjectHook#url}
  */
  readonly url: string;
  /**
  * Invoke the hook for wiki page events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#wiki_page_events ProjectHook#wiki_page_events}
  */
  readonly wikiPageEvents?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook gitlab_project_hook}
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
  * @param importFromId The id of the existing ProjectHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/project_hook gitlab_project_hook} Resource
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
        providerVersion: '17.2.0',
        providerVersionConstraint: '~> 17.0'
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
    this._customWebhookTemplate = config.customWebhookTemplate;
    this._deploymentEvents = config.deploymentEvents;
    this._enableSslVerification = config.enableSslVerification;
    this._id = config.id;
    this._issuesEvents = config.issuesEvents;
    this._jobEvents = config.jobEvents;
    this._mergeRequestsEvents = config.mergeRequestsEvents;
    this._noteEvents = config.noteEvents;
    this._pipelineEvents = config.pipelineEvents;
    this._project = config.project;
    this._pushEvents = config.pushEvents;
    this._pushEventsBranchFilter = config.pushEventsBranchFilter;
    this._releasesEvents = config.releasesEvents;
    this._tagPushEvents = config.tagPushEvents;
    this._token = config.token;
    this._url = config.url;
    this._wikiPageEvents = config.wikiPageEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // confidential_issues_events - computed: false, optional: true, required: false
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

  // confidential_note_events - computed: false, optional: true, required: false
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

  // custom_webhook_template - computed: false, optional: true, required: false
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

  // deployment_events - computed: false, optional: true, required: false
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

  // enable_ssl_verification - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // issues_events - computed: false, optional: true, required: false
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

  // job_events - computed: false, optional: true, required: false
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

  // merge_requests_events - computed: false, optional: true, required: false
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

  // note_events - computed: false, optional: true, required: false
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

  // pipeline_events - computed: false, optional: true, required: false
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

  // push_events - computed: false, optional: true, required: false
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

  // push_events_branch_filter - computed: false, optional: true, required: false
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

  // releases_events - computed: false, optional: true, required: false
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

  // tag_push_events - computed: false, optional: true, required: false
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

  // token - computed: false, optional: true, required: false
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

  // wiki_page_events - computed: false, optional: true, required: false
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
      custom_webhook_template: cdktf.stringToTerraform(this._customWebhookTemplate),
      deployment_events: cdktf.booleanToTerraform(this._deploymentEvents),
      enable_ssl_verification: cdktf.booleanToTerraform(this._enableSslVerification),
      id: cdktf.stringToTerraform(this._id),
      issues_events: cdktf.booleanToTerraform(this._issuesEvents),
      job_events: cdktf.booleanToTerraform(this._jobEvents),
      merge_requests_events: cdktf.booleanToTerraform(this._mergeRequestsEvents),
      note_events: cdktf.booleanToTerraform(this._noteEvents),
      pipeline_events: cdktf.booleanToTerraform(this._pipelineEvents),
      project: cdktf.stringToTerraform(this._project),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      push_events_branch_filter: cdktf.stringToTerraform(this._pushEventsBranchFilter),
      releases_events: cdktf.booleanToTerraform(this._releasesEvents),
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
      enable_ssl_verification: {
        value: cdktf.booleanToHclTerraform(this._enableSslVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
