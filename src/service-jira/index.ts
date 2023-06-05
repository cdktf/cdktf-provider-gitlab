/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceJiraConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#api_url ServiceJira#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Enable comments inside Jira issues on each GitLab event (commit / merge request)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#comment_on_event_enabled ServiceJira#comment_on_event_enabled}
  */
  readonly commentOnEventEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for commit events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#commit_events ServiceJira#commit_events}
  */
  readonly commitEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#id ServiceJira#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable notifications for issues events.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#issues_events ServiceJira#issues_events}
  */
  readonly issuesEvents?: boolean | cdktf.IResolvable;
  /**
  * The ID of a transition that moves issues to a closed state. You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2. *Note**: importing this field is only supported since GitLab 15.2.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#jira_issue_transition_id ServiceJira#jira_issue_transition_id}
  */
  readonly jiraIssueTransitionId?: string;
  /**
  * Enable notifications for job events.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#job_events ServiceJira#job_events}
  */
  readonly jobEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for merge request events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#merge_requests_events ServiceJira#merge_requests_events}
  */
  readonly mergeRequestsEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for note events.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#note_events ServiceJira#note_events}
  */
  readonly noteEvents?: boolean | cdktf.IResolvable;
  /**
  * The password of the user created to be used with GitLab/JIRA.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#password ServiceJira#password}
  */
  readonly password: string;
  /**
  * Enable notifications for pipeline events.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#pipeline_events ServiceJira#pipeline_events}
  */
  readonly pipelineEvents?: boolean | cdktf.IResolvable;
  /**
  * ID of the project you want to activate integration on.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#project ServiceJira#project}
  */
  readonly project: string;
  /**
  * The short identifier for your JIRA project, all uppercase, e.g., PROJ.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#project_key ServiceJira#project_key}
  */
  readonly projectKey?: string;
  /**
  * Enable notifications for push events.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#push_events ServiceJira#push_events}
  */
  readonly pushEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for tag_push events.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#tag_push_events ServiceJira#tag_push_events}
  */
  readonly tagPushEvents?: boolean | cdktf.IResolvable;
  /**
  * The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#url ServiceJira#url}
  */
  readonly url: string;
  /**
  * The username of the user created to be used with GitLab/JIRA.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira#username ServiceJira#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira gitlab_service_jira}
*/
export class ServiceJira extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_service_jira";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_jira gitlab_service_jira} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceJiraConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceJiraConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_service_jira',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.11.0',
        providerVersionConstraint: '~> 15.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiUrl = config.apiUrl;
    this._commentOnEventEnabled = config.commentOnEventEnabled;
    this._commitEvents = config.commitEvents;
    this._id = config.id;
    this._issuesEvents = config.issuesEvents;
    this._jiraIssueTransitionId = config.jiraIssueTransitionId;
    this._jobEvents = config.jobEvents;
    this._mergeRequestsEvents = config.mergeRequestsEvents;
    this._noteEvents = config.noteEvents;
    this._password = config.password;
    this._pipelineEvents = config.pipelineEvents;
    this._project = config.project;
    this._projectKey = config.projectKey;
    this._pushEvents = config.pushEvents;
    this._tagPushEvents = config.tagPushEvents;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // api_url - computed: true, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // comment_on_event_enabled - computed: true, optional: true, required: false
  private _commentOnEventEnabled?: boolean | cdktf.IResolvable; 
  public get commentOnEventEnabled() {
    return this.getBooleanAttribute('comment_on_event_enabled');
  }
  public set commentOnEventEnabled(value: boolean | cdktf.IResolvable) {
    this._commentOnEventEnabled = value;
  }
  public resetCommentOnEventEnabled() {
    this._commentOnEventEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentOnEventEnabledInput() {
    return this._commentOnEventEnabled;
  }

  // commit_events - computed: true, optional: true, required: false
  private _commitEvents?: boolean | cdktf.IResolvable; 
  public get commitEvents() {
    return this.getBooleanAttribute('commit_events');
  }
  public set commitEvents(value: boolean | cdktf.IResolvable) {
    this._commitEvents = value;
  }
  public resetCommitEvents() {
    this._commitEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitEventsInput() {
    return this._commitEvents;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // jira_issue_transition_id - computed: false, optional: true, required: false
  private _jiraIssueTransitionId?: string; 
  public get jiraIssueTransitionId() {
    return this.getStringAttribute('jira_issue_transition_id');
  }
  public set jiraIssueTransitionId(value: string) {
    this._jiraIssueTransitionId = value;
  }
  public resetJiraIssueTransitionId() {
    this._jiraIssueTransitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIssueTransitionIdInput() {
    return this._jiraIssueTransitionId;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
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

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_url: cdktf.stringToTerraform(this._apiUrl),
      comment_on_event_enabled: cdktf.booleanToTerraform(this._commentOnEventEnabled),
      commit_events: cdktf.booleanToTerraform(this._commitEvents),
      id: cdktf.stringToTerraform(this._id),
      issues_events: cdktf.booleanToTerraform(this._issuesEvents),
      jira_issue_transition_id: cdktf.stringToTerraform(this._jiraIssueTransitionId),
      job_events: cdktf.booleanToTerraform(this._jobEvents),
      merge_requests_events: cdktf.booleanToTerraform(this._mergeRequestsEvents),
      note_events: cdktf.booleanToTerraform(this._noteEvents),
      password: cdktf.stringToTerraform(this._password),
      pipeline_events: cdktf.booleanToTerraform(this._pipelineEvents),
      project: cdktf.stringToTerraform(this._project),
      project_key: cdktf.stringToTerraform(this._projectKey),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      tag_push_events: cdktf.booleanToTerraform(this._tagPushEvents),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
