/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationTelegramConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#branches_to_be_notified IntegrationTelegram#branches_to_be_notified}
  */
  readonly branchesToBeNotified?: string;
  /**
  * Enable notifications for confidential issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#confidential_issues_events IntegrationTelegram#confidential_issues_events}
  */
  readonly confidentialIssuesEvents: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for confidential note events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#confidential_note_events IntegrationTelegram#confidential_note_events}
  */
  readonly confidentialNoteEvents: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for issues events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#issues_events IntegrationTelegram#issues_events}
  */
  readonly issuesEvents: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for merge requests events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#merge_requests_events IntegrationTelegram#merge_requests_events}
  */
  readonly mergeRequestsEvents: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for note events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#note_events IntegrationTelegram#note_events}
  */
  readonly noteEvents: boolean | cdktf.IResolvable;
  /**
  * Send notifications for broken pipelines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#notify_only_broken_pipelines IntegrationTelegram#notify_only_broken_pipelines}
  */
  readonly notifyOnlyBrokenPipelines?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for pipeline events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#pipeline_events IntegrationTelegram#pipeline_events}
  */
  readonly pipelineEvents: boolean | cdktf.IResolvable;
  /**
  * The ID or full path of the project to integrate with Telegram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#project IntegrationTelegram#project}
  */
  readonly project: string;
  /**
  * Enable notifications for push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#push_events IntegrationTelegram#push_events}
  */
  readonly pushEvents: boolean | cdktf.IResolvable;
  /**
  * Unique identifier for the target chat or the username of the target channel (in the format `@channelusername`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#room IntegrationTelegram#room}
  */
  readonly room: string;
  /**
  * Enable notifications for tag push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#tag_push_events IntegrationTelegram#tag_push_events}
  */
  readonly tagPushEvents: boolean | cdktf.IResolvable;
  /**
  * The Telegram bot token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#token IntegrationTelegram#token}
  */
  readonly token: string;
  /**
  * Enable notifications for wiki page events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#wiki_page_events IntegrationTelegram#wiki_page_events}
  */
  readonly wikiPageEvents: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram gitlab_integration_telegram}
*/
export class IntegrationTelegram extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_integration_telegram";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationTelegram resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationTelegram to import
  * @param importFromId The id of the existing IntegrationTelegram that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationTelegram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_integration_telegram", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/integration_telegram gitlab_integration_telegram} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationTelegramConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationTelegramConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_integration_telegram',
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
    this._branchesToBeNotified = config.branchesToBeNotified;
    this._confidentialIssuesEvents = config.confidentialIssuesEvents;
    this._confidentialNoteEvents = config.confidentialNoteEvents;
    this._issuesEvents = config.issuesEvents;
    this._mergeRequestsEvents = config.mergeRequestsEvents;
    this._noteEvents = config.noteEvents;
    this._notifyOnlyBrokenPipelines = config.notifyOnlyBrokenPipelines;
    this._pipelineEvents = config.pipelineEvents;
    this._project = config.project;
    this._pushEvents = config.pushEvents;
    this._room = config.room;
    this._tagPushEvents = config.tagPushEvents;
    this._token = config.token;
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

  // confidential_issues_events - computed: false, optional: false, required: true
  private _confidentialIssuesEvents?: boolean | cdktf.IResolvable; 
  public get confidentialIssuesEvents() {
    return this.getBooleanAttribute('confidential_issues_events');
  }
  public set confidentialIssuesEvents(value: boolean | cdktf.IResolvable) {
    this._confidentialIssuesEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialIssuesEventsInput() {
    return this._confidentialIssuesEvents;
  }

  // confidential_note_events - computed: false, optional: false, required: true
  private _confidentialNoteEvents?: boolean | cdktf.IResolvable; 
  public get confidentialNoteEvents() {
    return this.getBooleanAttribute('confidential_note_events');
  }
  public set confidentialNoteEvents(value: boolean | cdktf.IResolvable) {
    this._confidentialNoteEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNoteEventsInput() {
    return this._confidentialNoteEvents;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issues_events - computed: false, optional: false, required: true
  private _issuesEvents?: boolean | cdktf.IResolvable; 
  public get issuesEvents() {
    return this.getBooleanAttribute('issues_events');
  }
  public set issuesEvents(value: boolean | cdktf.IResolvable) {
    this._issuesEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesEventsInput() {
    return this._issuesEvents;
  }

  // merge_requests_events - computed: false, optional: false, required: true
  private _mergeRequestsEvents?: boolean | cdktf.IResolvable; 
  public get mergeRequestsEvents() {
    return this.getBooleanAttribute('merge_requests_events');
  }
  public set mergeRequestsEvents(value: boolean | cdktf.IResolvable) {
    this._mergeRequestsEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestsEventsInput() {
    return this._mergeRequestsEvents;
  }

  // note_events - computed: false, optional: false, required: true
  private _noteEvents?: boolean | cdktf.IResolvable; 
  public get noteEvents() {
    return this.getBooleanAttribute('note_events');
  }
  public set noteEvents(value: boolean | cdktf.IResolvable) {
    this._noteEvents = value;
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

  // pipeline_events - computed: false, optional: false, required: true
  private _pipelineEvents?: boolean | cdktf.IResolvable; 
  public get pipelineEvents() {
    return this.getBooleanAttribute('pipeline_events');
  }
  public set pipelineEvents(value: boolean | cdktf.IResolvable) {
    this._pipelineEvents = value;
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

  // push_events - computed: false, optional: false, required: true
  private _pushEvents?: boolean | cdktf.IResolvable; 
  public get pushEvents() {
    return this.getBooleanAttribute('push_events');
  }
  public set pushEvents(value: boolean | cdktf.IResolvable) {
    this._pushEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEventsInput() {
    return this._pushEvents;
  }

  // room - computed: false, optional: false, required: true
  private _room?: string; 
  public get room() {
    return this.getStringAttribute('room');
  }
  public set room(value: string) {
    this._room = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roomInput() {
    return this._room;
  }

  // tag_push_events - computed: false, optional: false, required: true
  private _tagPushEvents?: boolean | cdktf.IResolvable; 
  public get tagPushEvents() {
    return this.getBooleanAttribute('tag_push_events');
  }
  public set tagPushEvents(value: boolean | cdktf.IResolvable) {
    this._tagPushEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPushEventsInput() {
    return this._tagPushEvents;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // wiki_page_events - computed: false, optional: false, required: true
  private _wikiPageEvents?: boolean | cdktf.IResolvable; 
  public get wikiPageEvents() {
    return this.getBooleanAttribute('wiki_page_events');
  }
  public set wikiPageEvents(value: boolean | cdktf.IResolvable) {
    this._wikiPageEvents = value;
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
      confidential_issues_events: cdktf.booleanToTerraform(this._confidentialIssuesEvents),
      confidential_note_events: cdktf.booleanToTerraform(this._confidentialNoteEvents),
      issues_events: cdktf.booleanToTerraform(this._issuesEvents),
      merge_requests_events: cdktf.booleanToTerraform(this._mergeRequestsEvents),
      note_events: cdktf.booleanToTerraform(this._noteEvents),
      notify_only_broken_pipelines: cdktf.booleanToTerraform(this._notifyOnlyBrokenPipelines),
      pipeline_events: cdktf.booleanToTerraform(this._pipelineEvents),
      project: cdktf.stringToTerraform(this._project),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      room: cdktf.stringToTerraform(this._room),
      tag_push_events: cdktf.booleanToTerraform(this._tagPushEvents),
      token: cdktf.stringToTerraform(this._token),
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
      issues_events: {
        value: cdktf.booleanToHclTerraform(this._issuesEvents),
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
      notify_only_broken_pipelines: {
        value: cdktf.booleanToHclTerraform(this._notifyOnlyBrokenPipelines),
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
      room: {
        value: cdktf.stringToHclTerraform(this._room),
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
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
