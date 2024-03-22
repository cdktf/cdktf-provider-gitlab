/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationSlackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#branches_to_be_notified IntegrationSlack#branches_to_be_notified}
  */
  readonly branchesToBeNotified?: string;
  /**
  * The name of the channel to receive confidential issue events notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#confidential_issue_channel IntegrationSlack#confidential_issue_channel}
  */
  readonly confidentialIssueChannel?: string;
  /**
  * Enable notifications for confidential issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#confidential_issues_events IntegrationSlack#confidential_issues_events}
  */
  readonly confidentialIssuesEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for confidential note events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#confidential_note_events IntegrationSlack#confidential_note_events}
  */
  readonly confidentialNoteEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#id IntegrationSlack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the channel to receive issue events notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#issue_channel IntegrationSlack#issue_channel}
  */
  readonly issueChannel?: string;
  /**
  * Enable notifications for issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#issues_events IntegrationSlack#issues_events}
  */
  readonly issuesEvents?: boolean | cdktf.IResolvable;
  /**
  * The name of the channel to receive merge request events notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#merge_request_channel IntegrationSlack#merge_request_channel}
  */
  readonly mergeRequestChannel?: string;
  /**
  * Enable notifications for merge requests events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#merge_requests_events IntegrationSlack#merge_requests_events}
  */
  readonly mergeRequestsEvents?: boolean | cdktf.IResolvable;
  /**
  * The name of the channel to receive note events notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#note_channel IntegrationSlack#note_channel}
  */
  readonly noteChannel?: string;
  /**
  * Enable notifications for note events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#note_events IntegrationSlack#note_events}
  */
  readonly noteEvents?: boolean | cdktf.IResolvable;
  /**
  * Send notifications for broken pipelines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#notify_only_broken_pipelines IntegrationSlack#notify_only_broken_pipelines}
  */
  readonly notifyOnlyBrokenPipelines?: boolean | cdktf.IResolvable;
  /**
  * This parameter has been replaced with `branches_to_be_notified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#notify_only_default_branch IntegrationSlack#notify_only_default_branch}
  */
  readonly notifyOnlyDefaultBranch?: boolean | cdktf.IResolvable;
  /**
  * The name of the channel to receive pipeline events notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#pipeline_channel IntegrationSlack#pipeline_channel}
  */
  readonly pipelineChannel?: string;
  /**
  * Enable notifications for pipeline events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#pipeline_events IntegrationSlack#pipeline_events}
  */
  readonly pipelineEvents?: boolean | cdktf.IResolvable;
  /**
  * ID of the project you want to activate integration on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#project IntegrationSlack#project}
  */
  readonly project: string;
  /**
  * The name of the channel to receive push events notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#push_channel IntegrationSlack#push_channel}
  */
  readonly pushChannel?: string;
  /**
  * Enable notifications for push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#push_events IntegrationSlack#push_events}
  */
  readonly pushEvents?: boolean | cdktf.IResolvable;
  /**
  * The name of the channel to receive tag push events notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#tag_push_channel IntegrationSlack#tag_push_channel}
  */
  readonly tagPushChannel?: string;
  /**
  * Enable notifications for tag push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#tag_push_events IntegrationSlack#tag_push_events}
  */
  readonly tagPushEvents?: boolean | cdktf.IResolvable;
  /**
  * Username to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#username IntegrationSlack#username}
  */
  readonly username?: string;
  /**
  * Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#webhook IntegrationSlack#webhook}
  */
  readonly webhook: string;
  /**
  * The name of the channel to receive wiki page events notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#wiki_page_channel IntegrationSlack#wiki_page_channel}
  */
  readonly wikiPageChannel?: string;
  /**
  * Enable notifications for wiki page events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#wiki_page_events IntegrationSlack#wiki_page_events}
  */
  readonly wikiPageEvents?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack gitlab_integration_slack}
*/
export class IntegrationSlack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_integration_slack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationSlack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationSlack to import
  * @param importFromId The id of the existing IntegrationSlack that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationSlack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_integration_slack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/integration_slack gitlab_integration_slack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationSlackConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationSlackConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_integration_slack',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.10.0',
        providerVersionConstraint: '~> 16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branchesToBeNotified = config.branchesToBeNotified;
    this._confidentialIssueChannel = config.confidentialIssueChannel;
    this._confidentialIssuesEvents = config.confidentialIssuesEvents;
    this._confidentialNoteEvents = config.confidentialNoteEvents;
    this._id = config.id;
    this._issueChannel = config.issueChannel;
    this._issuesEvents = config.issuesEvents;
    this._mergeRequestChannel = config.mergeRequestChannel;
    this._mergeRequestsEvents = config.mergeRequestsEvents;
    this._noteChannel = config.noteChannel;
    this._noteEvents = config.noteEvents;
    this._notifyOnlyBrokenPipelines = config.notifyOnlyBrokenPipelines;
    this._notifyOnlyDefaultBranch = config.notifyOnlyDefaultBranch;
    this._pipelineChannel = config.pipelineChannel;
    this._pipelineEvents = config.pipelineEvents;
    this._project = config.project;
    this._pushChannel = config.pushChannel;
    this._pushEvents = config.pushEvents;
    this._tagPushChannel = config.tagPushChannel;
    this._tagPushEvents = config.tagPushEvents;
    this._username = config.username;
    this._webhook = config.webhook;
    this._wikiPageChannel = config.wikiPageChannel;
    this._wikiPageEvents = config.wikiPageEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branches_to_be_notified - computed: true, optional: true, required: false
  private _branchesToBeNotified?: string; 
  public get branchesToBeNotified() {
    return this.getStringAttribute('branches_to_be_notified');
  }
  public set branchesToBeNotified(value: string) {
    this._branchesToBeNotified = value;
  }
  public resetBranchesToBeNotified() {
    this._branchesToBeNotified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesToBeNotifiedInput() {
    return this._branchesToBeNotified;
  }

  // confidential_issue_channel - computed: false, optional: true, required: false
  private _confidentialIssueChannel?: string; 
  public get confidentialIssueChannel() {
    return this.getStringAttribute('confidential_issue_channel');
  }
  public set confidentialIssueChannel(value: string) {
    this._confidentialIssueChannel = value;
  }
  public resetConfidentialIssueChannel() {
    this._confidentialIssueChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialIssueChannelInput() {
    return this._confidentialIssueChannel;
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

  // issue_channel - computed: false, optional: true, required: false
  private _issueChannel?: string; 
  public get issueChannel() {
    return this.getStringAttribute('issue_channel');
  }
  public set issueChannel(value: string) {
    this._issueChannel = value;
  }
  public resetIssueChannel() {
    this._issueChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueChannelInput() {
    return this._issueChannel;
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

  // job_events - computed: true, optional: false, required: false
  public get jobEvents() {
    return this.getBooleanAttribute('job_events');
  }

  // merge_request_channel - computed: false, optional: true, required: false
  private _mergeRequestChannel?: string; 
  public get mergeRequestChannel() {
    return this.getStringAttribute('merge_request_channel');
  }
  public set mergeRequestChannel(value: string) {
    this._mergeRequestChannel = value;
  }
  public resetMergeRequestChannel() {
    this._mergeRequestChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestChannelInput() {
    return this._mergeRequestChannel;
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

  // note_channel - computed: false, optional: true, required: false
  private _noteChannel?: string; 
  public get noteChannel() {
    return this.getStringAttribute('note_channel');
  }
  public set noteChannel(value: string) {
    this._noteChannel = value;
  }
  public resetNoteChannel() {
    this._noteChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteChannelInput() {
    return this._noteChannel;
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

  // notify_only_broken_pipelines - computed: true, optional: true, required: false
  private _notifyOnlyBrokenPipelines?: boolean | cdktf.IResolvable; 
  public get notifyOnlyBrokenPipelines() {
    return this.getBooleanAttribute('notify_only_broken_pipelines');
  }
  public set notifyOnlyBrokenPipelines(value: boolean | cdktf.IResolvable) {
    this._notifyOnlyBrokenPipelines = value;
  }
  public resetNotifyOnlyBrokenPipelines() {
    this._notifyOnlyBrokenPipelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnlyBrokenPipelinesInput() {
    return this._notifyOnlyBrokenPipelines;
  }

  // notify_only_default_branch - computed: true, optional: true, required: false
  private _notifyOnlyDefaultBranch?: boolean | cdktf.IResolvable; 
  public get notifyOnlyDefaultBranch() {
    return this.getBooleanAttribute('notify_only_default_branch');
  }
  public set notifyOnlyDefaultBranch(value: boolean | cdktf.IResolvable) {
    this._notifyOnlyDefaultBranch = value;
  }
  public resetNotifyOnlyDefaultBranch() {
    this._notifyOnlyDefaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnlyDefaultBranchInput() {
    return this._notifyOnlyDefaultBranch;
  }

  // pipeline_channel - computed: false, optional: true, required: false
  private _pipelineChannel?: string; 
  public get pipelineChannel() {
    return this.getStringAttribute('pipeline_channel');
  }
  public set pipelineChannel(value: string) {
    this._pipelineChannel = value;
  }
  public resetPipelineChannel() {
    this._pipelineChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineChannelInput() {
    return this._pipelineChannel;
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

  // push_channel - computed: false, optional: true, required: false
  private _pushChannel?: string; 
  public get pushChannel() {
    return this.getStringAttribute('push_channel');
  }
  public set pushChannel(value: string) {
    this._pushChannel = value;
  }
  public resetPushChannel() {
    this._pushChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushChannelInput() {
    return this._pushChannel;
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

  // tag_push_channel - computed: false, optional: true, required: false
  private _tagPushChannel?: string; 
  public get tagPushChannel() {
    return this.getStringAttribute('tag_push_channel');
  }
  public set tagPushChannel(value: string) {
    this._tagPushChannel = value;
  }
  public resetTagPushChannel() {
    this._tagPushChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPushChannelInput() {
    return this._tagPushChannel;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // webhook - computed: false, optional: false, required: true
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // wiki_page_channel - computed: false, optional: true, required: false
  private _wikiPageChannel?: string; 
  public get wikiPageChannel() {
    return this.getStringAttribute('wiki_page_channel');
  }
  public set wikiPageChannel(value: string) {
    this._wikiPageChannel = value;
  }
  public resetWikiPageChannel() {
    this._wikiPageChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wikiPageChannelInput() {
    return this._wikiPageChannel;
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
      branches_to_be_notified: cdktf.stringToTerraform(this._branchesToBeNotified),
      confidential_issue_channel: cdktf.stringToTerraform(this._confidentialIssueChannel),
      confidential_issues_events: cdktf.booleanToTerraform(this._confidentialIssuesEvents),
      confidential_note_events: cdktf.booleanToTerraform(this._confidentialNoteEvents),
      id: cdktf.stringToTerraform(this._id),
      issue_channel: cdktf.stringToTerraform(this._issueChannel),
      issues_events: cdktf.booleanToTerraform(this._issuesEvents),
      merge_request_channel: cdktf.stringToTerraform(this._mergeRequestChannel),
      merge_requests_events: cdktf.booleanToTerraform(this._mergeRequestsEvents),
      note_channel: cdktf.stringToTerraform(this._noteChannel),
      note_events: cdktf.booleanToTerraform(this._noteEvents),
      notify_only_broken_pipelines: cdktf.booleanToTerraform(this._notifyOnlyBrokenPipelines),
      notify_only_default_branch: cdktf.booleanToTerraform(this._notifyOnlyDefaultBranch),
      pipeline_channel: cdktf.stringToTerraform(this._pipelineChannel),
      pipeline_events: cdktf.booleanToTerraform(this._pipelineEvents),
      project: cdktf.stringToTerraform(this._project),
      push_channel: cdktf.stringToTerraform(this._pushChannel),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      tag_push_channel: cdktf.stringToTerraform(this._tagPushChannel),
      tag_push_events: cdktf.booleanToTerraform(this._tagPushEvents),
      username: cdktf.stringToTerraform(this._username),
      webhook: cdktf.stringToTerraform(this._webhook),
      wiki_page_channel: cdktf.stringToTerraform(this._wikiPageChannel),
      wiki_page_events: cdktf.booleanToTerraform(this._wikiPageEvents),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branches_to_be_notified: {
        value: cdktf.stringToHclTerraform(this._branchesToBeNotified),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidential_issue_channel: {
        value: cdktf.stringToHclTerraform(this._confidentialIssueChannel),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issue_channel: {
        value: cdktf.stringToHclTerraform(this._issueChannel),
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
      merge_request_channel: {
        value: cdktf.stringToHclTerraform(this._mergeRequestChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_requests_events: {
        value: cdktf.booleanToHclTerraform(this._mergeRequestsEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      note_channel: {
        value: cdktf.stringToHclTerraform(this._noteChannel),
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
      notify_only_broken_pipelines: {
        value: cdktf.booleanToHclTerraform(this._notifyOnlyBrokenPipelines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_only_default_branch: {
        value: cdktf.booleanToHclTerraform(this._notifyOnlyDefaultBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pipeline_channel: {
        value: cdktf.stringToHclTerraform(this._pipelineChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      push_channel: {
        value: cdktf.stringToHclTerraform(this._pushChannel),
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
      tag_push_channel: {
        value: cdktf.stringToHclTerraform(this._tagPushChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_push_events: {
        value: cdktf.booleanToHclTerraform(this._tagPushEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook: {
        value: cdktf.stringToHclTerraform(this._webhook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiki_page_channel: {
        value: cdktf.stringToHclTerraform(this._wikiPageChannel),
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
