/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIssueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IDs of the users to assign the issue to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#assignee_ids ProjectIssue#assignee_ids}
  */
  readonly assigneeIds?: number[];
  /**
  * Set an issue to be confidential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#confidential ProjectIssue#confidential}
  */
  readonly confidential?: boolean | cdktf.IResolvable;
  /**
  * When the issue was created. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. Requires administrator or project/group owner rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#created_at ProjectIssue#created_at}
  */
  readonly createdAt?: string;
  /**
  * Whether the issue is deleted instead of closed during destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#delete_on_destroy ProjectIssue#delete_on_destroy}
  */
  readonly deleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The description of an issue. Limited to 1,048,576 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#description ProjectIssue#description}
  */
  readonly description?: string;
  /**
  * Whether the issue is locked for discussions or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#discussion_locked ProjectIssue#discussion_locked}
  */
  readonly discussionLocked?: boolean | cdktf.IResolvable;
  /**
  * The ID of a discussion to resolve. This fills out the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#discussion_to_resolve ProjectIssue#discussion_to_resolve}
  */
  readonly discussionToResolve?: string;
  /**
  * The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#due_date ProjectIssue#due_date}
  */
  readonly dueDate?: string;
  /**
  * The ID of the epic issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#epic_issue_id ProjectIssue#epic_issue_id}
  */
  readonly epicIssueId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#id ProjectIssue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The internal ID of the project's issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#iid ProjectIssue#iid}
  */
  readonly iid?: number;
  /**
  * The type of issue. Valid values are: `issue`, `incident`, `test_case`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#issue_type ProjectIssue#issue_type}
  */
  readonly issueType?: string;
  /**
  * The labels of an issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#labels ProjectIssue#labels}
  */
  readonly labels?: string[];
  /**
  * The IID of a merge request in which to resolve all issues. This fills out the issue with a default description and mark all discussions as resolved. When passing a description or title, these values take precedence over the default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#merge_request_to_resolve_discussions_of ProjectIssue#merge_request_to_resolve_discussions_of}
  */
  readonly mergeRequestToResolveDiscussionsOf?: number;
  /**
  * The global ID of a milestone to assign issue. To find the milestone_id associated with a milestone, view an issue with the milestone assigned and use the API to retrieve the issue's details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#milestone_id ProjectIssue#milestone_id}
  */
  readonly milestoneId?: number;
  /**
  * The name or ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#project ProjectIssue#project}
  */
  readonly project: string;
  /**
  * The state of the issue. Valid values are: `opened`, `closed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#state ProjectIssue#state}
  */
  readonly state?: string;
  /**
  * The title of the issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#title ProjectIssue#title}
  */
  readonly title: string;
  /**
  * When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#updated_at ProjectIssue#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * The weight of the issue. Valid values are greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue#weight ProjectIssue#weight}
  */
  readonly weight?: number;
}
export interface ProjectIssueTaskCompletionStatus {
}

export function projectIssueTaskCompletionStatusToTerraform(struct?: ProjectIssueTaskCompletionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ProjectIssueTaskCompletionStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectIssueTaskCompletionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIssueTaskCompletionStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completed_count - computed: true, optional: false, required: false
  public get completedCount() {
    return this.getNumberAttribute('completed_count');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}

export class ProjectIssueTaskCompletionStatusList extends cdktf.ComplexList {

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
  public get(index: number): ProjectIssueTaskCompletionStatusOutputReference {
    return new ProjectIssueTaskCompletionStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue gitlab_project_issue}
*/
export class ProjectIssue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_issue";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue gitlab_project_issue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIssueConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIssueConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_issue',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.4.0',
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
    this._assigneeIds = config.assigneeIds;
    this._confidential = config.confidential;
    this._createdAt = config.createdAt;
    this._deleteOnDestroy = config.deleteOnDestroy;
    this._description = config.description;
    this._discussionLocked = config.discussionLocked;
    this._discussionToResolve = config.discussionToResolve;
    this._dueDate = config.dueDate;
    this._epicIssueId = config.epicIssueId;
    this._id = config.id;
    this._iid = config.iid;
    this._issueType = config.issueType;
    this._labels = config.labels;
    this._mergeRequestToResolveDiscussionsOf = config.mergeRequestToResolveDiscussionsOf;
    this._milestoneId = config.milestoneId;
    this._project = config.project;
    this._state = config.state;
    this._title = config.title;
    this._updatedAt = config.updatedAt;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignee_ids - computed: false, optional: true, required: false
  private _assigneeIds?: number[]; 
  public get assigneeIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('assignee_ids')));
  }
  public set assigneeIds(value: number[]) {
    this._assigneeIds = value;
  }
  public resetAssigneeIds() {
    this._assigneeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeIdsInput() {
    return this._assigneeIds;
  }

  // author_id - computed: true, optional: false, required: false
  public get authorId() {
    return this.getNumberAttribute('author_id');
  }

  // closed_at - computed: true, optional: false, required: false
  public get closedAt() {
    return this.getStringAttribute('closed_at');
  }

  // closed_by_user_id - computed: true, optional: false, required: false
  public get closedByUserId() {
    return this.getNumberAttribute('closed_by_user_id');
  }

  // confidential - computed: false, optional: true, required: false
  private _confidential?: boolean | cdktf.IResolvable; 
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }
  public set confidential(value: boolean | cdktf.IResolvable) {
    this._confidential = value;
  }
  public resetConfidential() {
    this._confidential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInput() {
    return this._confidential;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // delete_on_destroy - computed: false, optional: true, required: false
  private _deleteOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteOnDestroy() {
    return this.getBooleanAttribute('delete_on_destroy');
  }
  public set deleteOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteOnDestroy = value;
  }
  public resetDeleteOnDestroy() {
    this._deleteOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnDestroyInput() {
    return this._deleteOnDestroy;
  }

  // description - computed: false, optional: true, required: false
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

  // discussion_locked - computed: false, optional: true, required: false
  private _discussionLocked?: boolean | cdktf.IResolvable; 
  public get discussionLocked() {
    return this.getBooleanAttribute('discussion_locked');
  }
  public set discussionLocked(value: boolean | cdktf.IResolvable) {
    this._discussionLocked = value;
  }
  public resetDiscussionLocked() {
    this._discussionLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discussionLockedInput() {
    return this._discussionLocked;
  }

  // discussion_to_resolve - computed: false, optional: true, required: false
  private _discussionToResolve?: string; 
  public get discussionToResolve() {
    return this.getStringAttribute('discussion_to_resolve');
  }
  public set discussionToResolve(value: string) {
    this._discussionToResolve = value;
  }
  public resetDiscussionToResolve() {
    this._discussionToResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discussionToResolveInput() {
    return this._discussionToResolve;
  }

  // downvotes - computed: true, optional: false, required: false
  public get downvotes() {
    return this.getNumberAttribute('downvotes');
  }

  // due_date - computed: false, optional: true, required: false
  private _dueDate?: string; 
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }
  public set dueDate(value: string) {
    this._dueDate = value;
  }
  public resetDueDate() {
    this._dueDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dueDateInput() {
    return this._dueDate;
  }

  // epic_id - computed: true, optional: false, required: false
  public get epicId() {
    return this.getNumberAttribute('epic_id');
  }

  // epic_issue_id - computed: true, optional: true, required: false
  private _epicIssueId?: number; 
  public get epicIssueId() {
    return this.getNumberAttribute('epic_issue_id');
  }
  public set epicIssueId(value: number) {
    this._epicIssueId = value;
  }
  public resetEpicIssueId() {
    this._epicIssueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epicIssueIdInput() {
    return this._epicIssueId;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // human_time_estimate - computed: true, optional: false, required: false
  public get humanTimeEstimate() {
    return this.getStringAttribute('human_time_estimate');
  }

  // human_total_time_spent - computed: true, optional: false, required: false
  public get humanTotalTimeSpent() {
    return this.getStringAttribute('human_total_time_spent');
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

  // iid - computed: true, optional: true, required: false
  private _iid?: number; 
  public get iid() {
    return this.getNumberAttribute('iid');
  }
  public set iid(value: number) {
    this._iid = value;
  }
  public resetIid() {
    this._iid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iidInput() {
    return this._iid;
  }

  // issue_id - computed: true, optional: false, required: false
  public get issueId() {
    return this.getNumberAttribute('issue_id');
  }

  // issue_link_id - computed: true, optional: false, required: false
  public get issueLinkId() {
    return this.getNumberAttribute('issue_link_id');
  }

  // issue_type - computed: false, optional: true, required: false
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  public resetIssueType() {
    this._issueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // links - computed: true, optional: false, required: false
  private _links = new cdktf.StringMap(this, "links");
  public get links() {
    return this._links;
  }

  // merge_request_to_resolve_discussions_of - computed: false, optional: true, required: false
  private _mergeRequestToResolveDiscussionsOf?: number; 
  public get mergeRequestToResolveDiscussionsOf() {
    return this.getNumberAttribute('merge_request_to_resolve_discussions_of');
  }
  public set mergeRequestToResolveDiscussionsOf(value: number) {
    this._mergeRequestToResolveDiscussionsOf = value;
  }
  public resetMergeRequestToResolveDiscussionsOf() {
    this._mergeRequestToResolveDiscussionsOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestToResolveDiscussionsOfInput() {
    return this._mergeRequestToResolveDiscussionsOf;
  }

  // merge_requests_count - computed: true, optional: false, required: false
  public get mergeRequestsCount() {
    return this.getNumberAttribute('merge_requests_count');
  }

  // milestone_id - computed: false, optional: true, required: false
  private _milestoneId?: number; 
  public get milestoneId() {
    return this.getNumberAttribute('milestone_id');
  }
  public set milestoneId(value: number) {
    this._milestoneId = value;
  }
  public resetMilestoneId() {
    this._milestoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get milestoneIdInput() {
    return this._milestoneId;
  }

  // moved_to_id - computed: true, optional: false, required: false
  public get movedToId() {
    return this.getNumberAttribute('moved_to_id');
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

  // references - computed: true, optional: false, required: false
  private _references = new cdktf.StringMap(this, "references");
  public get references() {
    return this._references;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subscribed - computed: true, optional: false, required: false
  public get subscribed() {
    return this.getBooleanAttribute('subscribed');
  }

  // task_completion_status - computed: true, optional: false, required: false
  private _taskCompletionStatus = new ProjectIssueTaskCompletionStatusList(this, "task_completion_status", false);
  public get taskCompletionStatus() {
    return this._taskCompletionStatus;
  }

  // time_estimate - computed: true, optional: false, required: false
  public get timeEstimate() {
    return this.getNumberAttribute('time_estimate');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // total_time_spent - computed: true, optional: false, required: false
  public get totalTimeSpent() {
    return this.getNumberAttribute('total_time_spent');
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // upvotes - computed: true, optional: false, required: false
  public get upvotes() {
    return this.getNumberAttribute('upvotes');
  }

  // user_notes_count - computed: true, optional: false, required: false
  public get userNotesCount() {
    return this.getNumberAttribute('user_notes_count');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignee_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._assigneeIds),
      confidential: cdktf.booleanToTerraform(this._confidential),
      created_at: cdktf.stringToTerraform(this._createdAt),
      delete_on_destroy: cdktf.booleanToTerraform(this._deleteOnDestroy),
      description: cdktf.stringToTerraform(this._description),
      discussion_locked: cdktf.booleanToTerraform(this._discussionLocked),
      discussion_to_resolve: cdktf.stringToTerraform(this._discussionToResolve),
      due_date: cdktf.stringToTerraform(this._dueDate),
      epic_issue_id: cdktf.numberToTerraform(this._epicIssueId),
      id: cdktf.stringToTerraform(this._id),
      iid: cdktf.numberToTerraform(this._iid),
      issue_type: cdktf.stringToTerraform(this._issueType),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      merge_request_to_resolve_discussions_of: cdktf.numberToTerraform(this._mergeRequestToResolveDiscussionsOf),
      milestone_id: cdktf.numberToTerraform(this._milestoneId),
      project: cdktf.stringToTerraform(this._project),
      state: cdktf.stringToTerraform(this._state),
      title: cdktf.stringToTerraform(this._title),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }
}
