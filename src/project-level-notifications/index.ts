// https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectLevelNotificationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable notifications for closed issues. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#close_issue ProjectLevelNotifications#close_issue}
  */
  readonly closeIssue?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for closed merge requests. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#close_merge_request ProjectLevelNotifications#close_merge_request}
  */
  readonly closeMergeRequest?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for failed pipelines. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#failed_pipeline ProjectLevelNotifications#failed_pipeline}
  */
  readonly failedPipeline?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#fixed_pipeline ProjectLevelNotifications#fixed_pipeline}
  */
  readonly fixedPipeline?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for due issues. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#issue_due ProjectLevelNotifications#issue_due}
  */
  readonly issueDue?: boolean | cdktf.IResolvable;
  /**
  * The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#level ProjectLevelNotifications#level}
  */
  readonly level?: string;
  /**
  * Enable notifications for merged merge requests. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#merge_merge_request ProjectLevelNotifications#merge_merge_request}
  */
  readonly mergeMergeRequest?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#merge_when_pipeline_succeeds ProjectLevelNotifications#merge_when_pipeline_succeeds}
  */
  readonly mergeWhenPipelineSucceeds?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for moved projects. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#moved_project ProjectLevelNotifications#moved_project}
  */
  readonly movedProject?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for new issues. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#new_issue ProjectLevelNotifications#new_issue}
  */
  readonly newIssue?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for new merge requests. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#new_merge_request ProjectLevelNotifications#new_merge_request}
  */
  readonly newMergeRequest?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#new_note ProjectLevelNotifications#new_note}
  */
  readonly newNote?: boolean | cdktf.IResolvable;
  /**
  * The ID or URL-encoded path of a project where notifications will be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#project ProjectLevelNotifications#project}
  */
  readonly project: string;
  /**
  * Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#push_to_merge_request ProjectLevelNotifications#push_to_merge_request}
  */
  readonly pushToMergeRequest?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for issue reassignments. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#reassign_issue ProjectLevelNotifications#reassign_issue}
  */
  readonly reassignIssue?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#reassign_merge_request ProjectLevelNotifications#reassign_merge_request}
  */
  readonly reassignMergeRequest?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for reopened issues. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#reopen_issue ProjectLevelNotifications#reopen_issue}
  */
  readonly reopenIssue?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#reopen_merge_request ProjectLevelNotifications#reopen_merge_request}
  */
  readonly reopenMergeRequest?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for successful pipelines. Can only be used when `level` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#success_pipeline ProjectLevelNotifications#success_pipeline}
  */
  readonly successPipeline?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications gitlab_project_level_notifications}
*/
export class ProjectLevelNotifications extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_level_notifications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectLevelNotifications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectLevelNotifications to import
  * @param importFromId The id of the existing ProjectLevelNotifications that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectLevelNotifications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_level_notifications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/project_level_notifications gitlab_project_level_notifications} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectLevelNotificationsConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectLevelNotificationsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_level_notifications',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.8.0',
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
    this._closeIssue = config.closeIssue;
    this._closeMergeRequest = config.closeMergeRequest;
    this._failedPipeline = config.failedPipeline;
    this._fixedPipeline = config.fixedPipeline;
    this._issueDue = config.issueDue;
    this._level = config.level;
    this._mergeMergeRequest = config.mergeMergeRequest;
    this._mergeWhenPipelineSucceeds = config.mergeWhenPipelineSucceeds;
    this._movedProject = config.movedProject;
    this._newIssue = config.newIssue;
    this._newMergeRequest = config.newMergeRequest;
    this._newNote = config.newNote;
    this._project = config.project;
    this._pushToMergeRequest = config.pushToMergeRequest;
    this._reassignIssue = config.reassignIssue;
    this._reassignMergeRequest = config.reassignMergeRequest;
    this._reopenIssue = config.reopenIssue;
    this._reopenMergeRequest = config.reopenMergeRequest;
    this._successPipeline = config.successPipeline;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // close_issue - computed: true, optional: true, required: false
  private _closeIssue?: boolean | cdktf.IResolvable; 
  public get closeIssue() {
    return this.getBooleanAttribute('close_issue');
  }
  public set closeIssue(value: boolean | cdktf.IResolvable) {
    this._closeIssue = value;
  }
  public resetCloseIssue() {
    this._closeIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeIssueInput() {
    return this._closeIssue;
  }

  // close_merge_request - computed: true, optional: true, required: false
  private _closeMergeRequest?: boolean | cdktf.IResolvable; 
  public get closeMergeRequest() {
    return this.getBooleanAttribute('close_merge_request');
  }
  public set closeMergeRequest(value: boolean | cdktf.IResolvable) {
    this._closeMergeRequest = value;
  }
  public resetCloseMergeRequest() {
    this._closeMergeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeMergeRequestInput() {
    return this._closeMergeRequest;
  }

  // failed_pipeline - computed: true, optional: true, required: false
  private _failedPipeline?: boolean | cdktf.IResolvable; 
  public get failedPipeline() {
    return this.getBooleanAttribute('failed_pipeline');
  }
  public set failedPipeline(value: boolean | cdktf.IResolvable) {
    this._failedPipeline = value;
  }
  public resetFailedPipeline() {
    this._failedPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedPipelineInput() {
    return this._failedPipeline;
  }

  // fixed_pipeline - computed: true, optional: true, required: false
  private _fixedPipeline?: boolean | cdktf.IResolvable; 
  public get fixedPipeline() {
    return this.getBooleanAttribute('fixed_pipeline');
  }
  public set fixedPipeline(value: boolean | cdktf.IResolvable) {
    this._fixedPipeline = value;
  }
  public resetFixedPipeline() {
    this._fixedPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedPipelineInput() {
    return this._fixedPipeline;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_due - computed: true, optional: true, required: false
  private _issueDue?: boolean | cdktf.IResolvable; 
  public get issueDue() {
    return this.getBooleanAttribute('issue_due');
  }
  public set issueDue(value: boolean | cdktf.IResolvable) {
    this._issueDue = value;
  }
  public resetIssueDue() {
    this._issueDue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueDueInput() {
    return this._issueDue;
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // merge_merge_request - computed: true, optional: true, required: false
  private _mergeMergeRequest?: boolean | cdktf.IResolvable; 
  public get mergeMergeRequest() {
    return this.getBooleanAttribute('merge_merge_request');
  }
  public set mergeMergeRequest(value: boolean | cdktf.IResolvable) {
    this._mergeMergeRequest = value;
  }
  public resetMergeMergeRequest() {
    this._mergeMergeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeMergeRequestInput() {
    return this._mergeMergeRequest;
  }

  // merge_when_pipeline_succeeds - computed: true, optional: true, required: false
  private _mergeWhenPipelineSucceeds?: boolean | cdktf.IResolvable; 
  public get mergeWhenPipelineSucceeds() {
    return this.getBooleanAttribute('merge_when_pipeline_succeeds');
  }
  public set mergeWhenPipelineSucceeds(value: boolean | cdktf.IResolvable) {
    this._mergeWhenPipelineSucceeds = value;
  }
  public resetMergeWhenPipelineSucceeds() {
    this._mergeWhenPipelineSucceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeWhenPipelineSucceedsInput() {
    return this._mergeWhenPipelineSucceeds;
  }

  // moved_project - computed: true, optional: true, required: false
  private _movedProject?: boolean | cdktf.IResolvable; 
  public get movedProject() {
    return this.getBooleanAttribute('moved_project');
  }
  public set movedProject(value: boolean | cdktf.IResolvable) {
    this._movedProject = value;
  }
  public resetMovedProject() {
    this._movedProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movedProjectInput() {
    return this._movedProject;
  }

  // new_issue - computed: true, optional: true, required: false
  private _newIssue?: boolean | cdktf.IResolvable; 
  public get newIssue() {
    return this.getBooleanAttribute('new_issue');
  }
  public set newIssue(value: boolean | cdktf.IResolvable) {
    this._newIssue = value;
  }
  public resetNewIssue() {
    this._newIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newIssueInput() {
    return this._newIssue;
  }

  // new_merge_request - computed: true, optional: true, required: false
  private _newMergeRequest?: boolean | cdktf.IResolvable; 
  public get newMergeRequest() {
    return this.getBooleanAttribute('new_merge_request');
  }
  public set newMergeRequest(value: boolean | cdktf.IResolvable) {
    this._newMergeRequest = value;
  }
  public resetNewMergeRequest() {
    this._newMergeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newMergeRequestInput() {
    return this._newMergeRequest;
  }

  // new_note - computed: true, optional: true, required: false
  private _newNote?: boolean | cdktf.IResolvable; 
  public get newNote() {
    return this.getBooleanAttribute('new_note');
  }
  public set newNote(value: boolean | cdktf.IResolvable) {
    this._newNote = value;
  }
  public resetNewNote() {
    this._newNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNoteInput() {
    return this._newNote;
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

  // push_to_merge_request - computed: true, optional: true, required: false
  private _pushToMergeRequest?: boolean | cdktf.IResolvable; 
  public get pushToMergeRequest() {
    return this.getBooleanAttribute('push_to_merge_request');
  }
  public set pushToMergeRequest(value: boolean | cdktf.IResolvable) {
    this._pushToMergeRequest = value;
  }
  public resetPushToMergeRequest() {
    this._pushToMergeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushToMergeRequestInput() {
    return this._pushToMergeRequest;
  }

  // reassign_issue - computed: true, optional: true, required: false
  private _reassignIssue?: boolean | cdktf.IResolvable; 
  public get reassignIssue() {
    return this.getBooleanAttribute('reassign_issue');
  }
  public set reassignIssue(value: boolean | cdktf.IResolvable) {
    this._reassignIssue = value;
  }
  public resetReassignIssue() {
    this._reassignIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassignIssueInput() {
    return this._reassignIssue;
  }

  // reassign_merge_request - computed: true, optional: true, required: false
  private _reassignMergeRequest?: boolean | cdktf.IResolvable; 
  public get reassignMergeRequest() {
    return this.getBooleanAttribute('reassign_merge_request');
  }
  public set reassignMergeRequest(value: boolean | cdktf.IResolvable) {
    this._reassignMergeRequest = value;
  }
  public resetReassignMergeRequest() {
    this._reassignMergeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassignMergeRequestInput() {
    return this._reassignMergeRequest;
  }

  // reopen_issue - computed: true, optional: true, required: false
  private _reopenIssue?: boolean | cdktf.IResolvable; 
  public get reopenIssue() {
    return this.getBooleanAttribute('reopen_issue');
  }
  public set reopenIssue(value: boolean | cdktf.IResolvable) {
    this._reopenIssue = value;
  }
  public resetReopenIssue() {
    this._reopenIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reopenIssueInput() {
    return this._reopenIssue;
  }

  // reopen_merge_request - computed: true, optional: true, required: false
  private _reopenMergeRequest?: boolean | cdktf.IResolvable; 
  public get reopenMergeRequest() {
    return this.getBooleanAttribute('reopen_merge_request');
  }
  public set reopenMergeRequest(value: boolean | cdktf.IResolvable) {
    this._reopenMergeRequest = value;
  }
  public resetReopenMergeRequest() {
    this._reopenMergeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reopenMergeRequestInput() {
    return this._reopenMergeRequest;
  }

  // success_pipeline - computed: true, optional: true, required: false
  private _successPipeline?: boolean | cdktf.IResolvable; 
  public get successPipeline() {
    return this.getBooleanAttribute('success_pipeline');
  }
  public set successPipeline(value: boolean | cdktf.IResolvable) {
    this._successPipeline = value;
  }
  public resetSuccessPipeline() {
    this._successPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successPipelineInput() {
    return this._successPipeline;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      close_issue: cdktf.booleanToTerraform(this._closeIssue),
      close_merge_request: cdktf.booleanToTerraform(this._closeMergeRequest),
      failed_pipeline: cdktf.booleanToTerraform(this._failedPipeline),
      fixed_pipeline: cdktf.booleanToTerraform(this._fixedPipeline),
      issue_due: cdktf.booleanToTerraform(this._issueDue),
      level: cdktf.stringToTerraform(this._level),
      merge_merge_request: cdktf.booleanToTerraform(this._mergeMergeRequest),
      merge_when_pipeline_succeeds: cdktf.booleanToTerraform(this._mergeWhenPipelineSucceeds),
      moved_project: cdktf.booleanToTerraform(this._movedProject),
      new_issue: cdktf.booleanToTerraform(this._newIssue),
      new_merge_request: cdktf.booleanToTerraform(this._newMergeRequest),
      new_note: cdktf.booleanToTerraform(this._newNote),
      project: cdktf.stringToTerraform(this._project),
      push_to_merge_request: cdktf.booleanToTerraform(this._pushToMergeRequest),
      reassign_issue: cdktf.booleanToTerraform(this._reassignIssue),
      reassign_merge_request: cdktf.booleanToTerraform(this._reassignMergeRequest),
      reopen_issue: cdktf.booleanToTerraform(this._reopenIssue),
      reopen_merge_request: cdktf.booleanToTerraform(this._reopenMergeRequest),
      success_pipeline: cdktf.booleanToTerraform(this._successPipeline),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      close_issue: {
        value: cdktf.booleanToHclTerraform(this._closeIssue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      close_merge_request: {
        value: cdktf.booleanToHclTerraform(this._closeMergeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failed_pipeline: {
        value: cdktf.booleanToHclTerraform(this._failedPipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fixed_pipeline: {
        value: cdktf.booleanToHclTerraform(this._fixedPipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issue_due: {
        value: cdktf.booleanToHclTerraform(this._issueDue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_merge_request: {
        value: cdktf.booleanToHclTerraform(this._mergeMergeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      merge_when_pipeline_succeeds: {
        value: cdktf.booleanToHclTerraform(this._mergeWhenPipelineSucceeds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      moved_project: {
        value: cdktf.booleanToHclTerraform(this._movedProject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      new_issue: {
        value: cdktf.booleanToHclTerraform(this._newIssue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      new_merge_request: {
        value: cdktf.booleanToHclTerraform(this._newMergeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      new_note: {
        value: cdktf.booleanToHclTerraform(this._newNote),
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
      push_to_merge_request: {
        value: cdktf.booleanToHclTerraform(this._pushToMergeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reassign_issue: {
        value: cdktf.booleanToHclTerraform(this._reassignIssue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reassign_merge_request: {
        value: cdktf.booleanToHclTerraform(this._reassignMergeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reopen_issue: {
        value: cdktf.booleanToHclTerraform(this._reopenIssue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reopen_merge_request: {
        value: cdktf.booleanToHclTerraform(this._reopenMergeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      success_pipeline: {
        value: cdktf.booleanToHclTerraform(this._successPipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
