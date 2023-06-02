// https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceMicrosoftTeamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#branches_to_be_notified ServiceMicrosoftTeams#branches_to_be_notified}
  */
  readonly branchesToBeNotified?: string;
  /**
  * Enable notifications for confidential issue events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#confidential_issues_events ServiceMicrosoftTeams#confidential_issues_events}
  */
  readonly confidentialIssuesEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for confidential note events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#confidential_note_events ServiceMicrosoftTeams#confidential_note_events}
  */
  readonly confidentialNoteEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#id ServiceMicrosoftTeams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable notifications for issue events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#issues_events ServiceMicrosoftTeams#issues_events}
  */
  readonly issuesEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for merge request events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#merge_requests_events ServiceMicrosoftTeams#merge_requests_events}
  */
  readonly mergeRequestsEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for note events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#note_events ServiceMicrosoftTeams#note_events}
  */
  readonly noteEvents?: boolean | cdktf.IResolvable;
  /**
  * Send notifications for broken pipelines
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#notify_only_broken_pipelines ServiceMicrosoftTeams#notify_only_broken_pipelines}
  */
  readonly notifyOnlyBrokenPipelines?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for pipeline events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#pipeline_events ServiceMicrosoftTeams#pipeline_events}
  */
  readonly pipelineEvents?: boolean | cdktf.IResolvable;
  /**
  * ID of the project you want to activate integration on.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#project ServiceMicrosoftTeams#project}
  */
  readonly project: string;
  /**
  * Enable notifications for push events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#push_events ServiceMicrosoftTeams#push_events}
  */
  readonly pushEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for tag push events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#tag_push_events ServiceMicrosoftTeams#tag_push_events}
  */
  readonly tagPushEvents?: boolean | cdktf.IResolvable;
  /**
  * The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#webhook ServiceMicrosoftTeams#webhook}
  */
  readonly webhook: string;
  /**
  * Enable notifications for wiki page events
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams#wiki_page_events ServiceMicrosoftTeams#wiki_page_events}
  */
  readonly wikiPageEvents?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams gitlab_service_microsoft_teams}
*/
export class ServiceMicrosoftTeams extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_service_microsoft_teams";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_microsoft_teams gitlab_service_microsoft_teams} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceMicrosoftTeamsConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceMicrosoftTeamsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_service_microsoft_teams',
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
    this._branchesToBeNotified = config.branchesToBeNotified;
    this._confidentialIssuesEvents = config.confidentialIssuesEvents;
    this._confidentialNoteEvents = config.confidentialNoteEvents;
    this._id = config.id;
    this._issuesEvents = config.issuesEvents;
    this._mergeRequestsEvents = config.mergeRequestsEvents;
    this._noteEvents = config.noteEvents;
    this._notifyOnlyBrokenPipelines = config.notifyOnlyBrokenPipelines;
    this._pipelineEvents = config.pipelineEvents;
    this._project = config.project;
    this._pushEvents = config.pushEvents;
    this._tagPushEvents = config.tagPushEvents;
    this._webhook = config.webhook;
    this._wikiPageEvents = config.wikiPageEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // branches_to_be_notified - computed: false, optional: true, required: false
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

  // notify_only_broken_pipelines - computed: false, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
      branches_to_be_notified: cdktf.stringToTerraform(this._branchesToBeNotified),
      confidential_issues_events: cdktf.booleanToTerraform(this._confidentialIssuesEvents),
      confidential_note_events: cdktf.booleanToTerraform(this._confidentialNoteEvents),
      id: cdktf.stringToTerraform(this._id),
      issues_events: cdktf.booleanToTerraform(this._issuesEvents),
      merge_requests_events: cdktf.booleanToTerraform(this._mergeRequestsEvents),
      note_events: cdktf.booleanToTerraform(this._noteEvents),
      notify_only_broken_pipelines: cdktf.booleanToTerraform(this._notifyOnlyBrokenPipelines),
      pipeline_events: cdktf.booleanToTerraform(this._pipelineEvents),
      project: cdktf.stringToTerraform(this._project),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      tag_push_events: cdktf.booleanToTerraform(this._tagPushEvents),
      webhook: cdktf.stringToTerraform(this._webhook),
      wiki_page_events: cdktf.booleanToTerraform(this._wikiPageEvents),
    };
  }
}
