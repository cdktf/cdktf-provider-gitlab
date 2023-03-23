// https://www.terraform.io/docs/providers/gitlab/d/project_issues
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectIssuesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return issues assigned to the given user id. Mutually exclusive with assignee_username. None returns unassigned issues. Any returns issues with an assignee.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#assignee_id DataGitlabProjectIssues#assignee_id}
  */
  readonly assigneeId?: number;
  /**
  * Return issues assigned to the given username. Similar to assignee_id and mutually exclusive with assignee_id. In GitLab CE, the assignee_username array should only contain a single value. Otherwise, an invalid parameter error is returned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#assignee_username DataGitlabProjectIssues#assignee_username}
  */
  readonly assigneeUsername?: string;
  /**
  * Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#author_id DataGitlabProjectIssues#author_id}
  */
  readonly authorId?: number;
  /**
  * Filter confidential or public issues.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#confidential DataGitlabProjectIssues#confidential}
  */
  readonly confidential?: boolean | cdktf.IResolvable;
  /**
  * Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#created_after DataGitlabProjectIssues#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#created_before DataGitlabProjectIssues#created_before}
  */
  readonly createdBefore?: string;
  /**
  * Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month. Accepts: 0 (no due date), any, today, tomorrow, overdue, week, month, next_month_and_previous_two_weeks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#due_date DataGitlabProjectIssues#due_date}
  */
  readonly dueDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#id DataGitlabProjectIssues#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Return only the issues having the given iid
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#iids DataGitlabProjectIssues#iids}
  */
  readonly iids?: number[];
  /**
  * Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#issue_type DataGitlabProjectIssues#issue_type}
  */
  readonly issueType?: string;
  /**
  * Return issues with labels. Issues must have all labels to be returned. None lists all issues with no labels. Any lists all issues with at least one label. No+Label (Deprecated) lists all issues with no labels. Predefined names are case-insensitive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#labels DataGitlabProjectIssues#labels}
  */
  readonly labels?: string[];
  /**
  * The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#milestone DataGitlabProjectIssues#milestone}
  */
  readonly milestone?: string;
  /**
  * Return issues reacted by the authenticated user by the given emoji. None returns issues not given a reaction. Any returns issues given at least one reaction.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#my_reaction_emoji DataGitlabProjectIssues#my_reaction_emoji}
  */
  readonly myReactionEmoji?: string;
  /**
  * Return issues that do not match the assignee id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_assignee_id DataGitlabProjectIssues#not_assignee_id}
  */
  readonly notAssigneeId?: number[];
  /**
  * Return issues that do not match the author id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_author_id DataGitlabProjectIssues#not_author_id}
  */
  readonly notAuthorId?: number[];
  /**
  * Return issues that do not match the labels.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_labels DataGitlabProjectIssues#not_labels}
  */
  readonly notLabels?: string[];
  /**
  * Return issues that do not match the milestone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_milestone DataGitlabProjectIssues#not_milestone}
  */
  readonly notMilestone?: string;
  /**
  * Return issues not reacted by the authenticated user by the given emoji.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_my_reaction_emoji DataGitlabProjectIssues#not_my_reaction_emoji}
  */
  readonly notMyReactionEmoji?: string[];
  /**
  * Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#order_by DataGitlabProjectIssues#order_by}
  */
  readonly orderBy?: string;
  /**
  * The name or id of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#project DataGitlabProjectIssues#project}
  */
  readonly project: string;
  /**
  * Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#scope DataGitlabProjectIssues#scope}
  */
  readonly scope?: string;
  /**
  * Search project issues against their title and description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#search DataGitlabProjectIssues#search}
  */
  readonly search?: string;
  /**
  * Return issues sorted in asc or desc order. Default is desc
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#sort DataGitlabProjectIssues#sort}
  */
  readonly sort?: string;
  /**
  * Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#updated_after DataGitlabProjectIssues#updated_after}
  */
  readonly updatedAfter?: string;
  /**
  * Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#updated_before DataGitlabProjectIssues#updated_before}
  */
  readonly updatedBefore?: string;
  /**
  * Return issues with the specified weight. None returns issues with no weight assigned. Any returns issues with a weight assigned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#weight DataGitlabProjectIssues#weight}
  */
  readonly weight?: number;
  /**
  * If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color. Default is false. description_html was introduced in GitLab 12.7
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#with_labels_details DataGitlabProjectIssues#with_labels_details}
  */
  readonly withLabelsDetails?: boolean | cdktf.IResolvable;
}
export interface DataGitlabProjectIssuesIssuesTaskCompletionStatus {
}

export function dataGitlabProjectIssuesIssuesTaskCompletionStatusToTerraform(struct?: DataGitlabProjectIssuesIssuesTaskCompletionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectIssuesIssuesTaskCompletionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectIssuesIssuesTaskCompletionStatus | undefined) {
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

export class DataGitlabProjectIssuesIssuesTaskCompletionStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference {
    return new DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectIssuesIssues {
}

export function dataGitlabProjectIssuesIssuesToTerraform(struct?: DataGitlabProjectIssuesIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGitlabProjectIssuesIssuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectIssuesIssues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectIssuesIssues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assignee_ids - computed: true, optional: false, required: false
  public get assigneeIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('assignee_ids')));
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

  // confidential - computed: true, optional: false, required: false
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // discussion_locked - computed: true, optional: false, required: false
  public get discussionLocked() {
    return this.getBooleanAttribute('discussion_locked');
  }

  // discussion_to_resolve - computed: true, optional: false, required: false
  public get discussionToResolve() {
    return this.getStringAttribute('discussion_to_resolve');
  }

  // downvotes - computed: true, optional: false, required: false
  public get downvotes() {
    return this.getNumberAttribute('downvotes');
  }

  // due_date - computed: true, optional: false, required: false
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }

  // epic_id - computed: true, optional: false, required: false
  public get epicId() {
    return this.getNumberAttribute('epic_id');
  }

  // epic_issue_id - computed: true, optional: false, required: false
  public get epicIssueId() {
    return this.getNumberAttribute('epic_issue_id');
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

  // iid - computed: true, optional: false, required: false
  public get iid() {
    return this.getNumberAttribute('iid');
  }

  // issue_id - computed: true, optional: false, required: false
  public get issueId() {
    return this.getNumberAttribute('issue_id');
  }

  // issue_link_id - computed: true, optional: false, required: false
  public get issueLinkId() {
    return this.getNumberAttribute('issue_link_id');
  }

  // issue_type - computed: true, optional: false, required: false
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // links - computed: true, optional: false, required: false
  private _links = new cdktf.StringMap(this, "links");
  public get links() {
    return this._links;
  }

  // merge_request_to_resolve_discussions_of - computed: true, optional: false, required: false
  public get mergeRequestToResolveDiscussionsOf() {
    return this.getNumberAttribute('merge_request_to_resolve_discussions_of');
  }

  // merge_requests_count - computed: true, optional: false, required: false
  public get mergeRequestsCount() {
    return this.getNumberAttribute('merge_requests_count');
  }

  // milestone_id - computed: true, optional: false, required: false
  public get milestoneId() {
    return this.getNumberAttribute('milestone_id');
  }

  // moved_to_id - computed: true, optional: false, required: false
  public get movedToId() {
    return this.getNumberAttribute('moved_to_id');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // references - computed: true, optional: false, required: false
  private _references = new cdktf.StringMap(this, "references");
  public get references() {
    return this._references;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscribed - computed: true, optional: false, required: false
  public get subscribed() {
    return this.getBooleanAttribute('subscribed');
  }

  // task_completion_status - computed: true, optional: false, required: false
  private _taskCompletionStatus = new DataGitlabProjectIssuesIssuesTaskCompletionStatusList(this, "task_completion_status", false);
  public get taskCompletionStatus() {
    return this._taskCompletionStatus;
  }

  // time_estimate - computed: true, optional: false, required: false
  public get timeEstimate() {
    return this.getNumberAttribute('time_estimate');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // total_time_spent - computed: true, optional: false, required: false
  public get totalTimeSpent() {
    return this.getNumberAttribute('total_time_spent');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataGitlabProjectIssuesIssuesList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectIssuesIssuesOutputReference {
    return new DataGitlabProjectIssuesIssuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues gitlab_project_issues}
*/
export class DataGitlabProjectIssues extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_issues";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues gitlab_project_issues} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectIssuesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectIssuesConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_issues',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.10.0',
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
    this._assigneeId = config.assigneeId;
    this._assigneeUsername = config.assigneeUsername;
    this._authorId = config.authorId;
    this._confidential = config.confidential;
    this._createdAfter = config.createdAfter;
    this._createdBefore = config.createdBefore;
    this._dueDate = config.dueDate;
    this._id = config.id;
    this._iids = config.iids;
    this._issueType = config.issueType;
    this._labels = config.labels;
    this._milestone = config.milestone;
    this._myReactionEmoji = config.myReactionEmoji;
    this._notAssigneeId = config.notAssigneeId;
    this._notAuthorId = config.notAuthorId;
    this._notLabels = config.notLabels;
    this._notMilestone = config.notMilestone;
    this._notMyReactionEmoji = config.notMyReactionEmoji;
    this._orderBy = config.orderBy;
    this._project = config.project;
    this._scope = config.scope;
    this._search = config.search;
    this._sort = config.sort;
    this._updatedAfter = config.updatedAfter;
    this._updatedBefore = config.updatedBefore;
    this._weight = config.weight;
    this._withLabelsDetails = config.withLabelsDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignee_id - computed: false, optional: true, required: false
  private _assigneeId?: number; 
  public get assigneeId() {
    return this.getNumberAttribute('assignee_id');
  }
  public set assigneeId(value: number) {
    this._assigneeId = value;
  }
  public resetAssigneeId() {
    this._assigneeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeIdInput() {
    return this._assigneeId;
  }

  // assignee_username - computed: false, optional: true, required: false
  private _assigneeUsername?: string; 
  public get assigneeUsername() {
    return this.getStringAttribute('assignee_username');
  }
  public set assigneeUsername(value: string) {
    this._assigneeUsername = value;
  }
  public resetAssigneeUsername() {
    this._assigneeUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeUsernameInput() {
    return this._assigneeUsername;
  }

  // author_id - computed: false, optional: true, required: false
  private _authorId?: number; 
  public get authorId() {
    return this.getNumberAttribute('author_id');
  }
  public set authorId(value: number) {
    this._authorId = value;
  }
  public resetAuthorId() {
    this._authorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorIdInput() {
    return this._authorId;
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

  // created_after - computed: false, optional: true, required: false
  private _createdAfter?: string; 
  public get createdAfter() {
    return this.getStringAttribute('created_after');
  }
  public set createdAfter(value: string) {
    this._createdAfter = value;
  }
  public resetCreatedAfter() {
    this._createdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAfterInput() {
    return this._createdAfter;
  }

  // created_before - computed: false, optional: true, required: false
  private _createdBefore?: string; 
  public get createdBefore() {
    return this.getStringAttribute('created_before');
  }
  public set createdBefore(value: string) {
    this._createdBefore = value;
  }
  public resetCreatedBefore() {
    this._createdBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeInput() {
    return this._createdBefore;
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

  // iids - computed: false, optional: true, required: false
  private _iids?: number[]; 
  public get iids() {
    return this.getNumberListAttribute('iids');
  }
  public set iids(value: number[]) {
    this._iids = value;
  }
  public resetIids() {
    this._iids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iidsInput() {
    return this._iids;
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

  // issues - computed: true, optional: false, required: false
  private _issues = new DataGitlabProjectIssuesIssuesList(this, "issues", false);
  public get issues() {
    return this._issues;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
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

  // milestone - computed: false, optional: true, required: false
  private _milestone?: string; 
  public get milestone() {
    return this.getStringAttribute('milestone');
  }
  public set milestone(value: string) {
    this._milestone = value;
  }
  public resetMilestone() {
    this._milestone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get milestoneInput() {
    return this._milestone;
  }

  // my_reaction_emoji - computed: false, optional: true, required: false
  private _myReactionEmoji?: string; 
  public get myReactionEmoji() {
    return this.getStringAttribute('my_reaction_emoji');
  }
  public set myReactionEmoji(value: string) {
    this._myReactionEmoji = value;
  }
  public resetMyReactionEmoji() {
    this._myReactionEmoji = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myReactionEmojiInput() {
    return this._myReactionEmoji;
  }

  // not_assignee_id - computed: false, optional: true, required: false
  private _notAssigneeId?: number[]; 
  public get notAssigneeId() {
    return this.getNumberListAttribute('not_assignee_id');
  }
  public set notAssigneeId(value: number[]) {
    this._notAssigneeId = value;
  }
  public resetNotAssigneeId() {
    this._notAssigneeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAssigneeIdInput() {
    return this._notAssigneeId;
  }

  // not_author_id - computed: false, optional: true, required: false
  private _notAuthorId?: number[]; 
  public get notAuthorId() {
    return this.getNumberListAttribute('not_author_id');
  }
  public set notAuthorId(value: number[]) {
    this._notAuthorId = value;
  }
  public resetNotAuthorId() {
    this._notAuthorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAuthorIdInput() {
    return this._notAuthorId;
  }

  // not_labels - computed: false, optional: true, required: false
  private _notLabels?: string[]; 
  public get notLabels() {
    return this.getListAttribute('not_labels');
  }
  public set notLabels(value: string[]) {
    this._notLabels = value;
  }
  public resetNotLabels() {
    this._notLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notLabelsInput() {
    return this._notLabels;
  }

  // not_milestone - computed: false, optional: true, required: false
  private _notMilestone?: string; 
  public get notMilestone() {
    return this.getStringAttribute('not_milestone');
  }
  public set notMilestone(value: string) {
    this._notMilestone = value;
  }
  public resetNotMilestone() {
    this._notMilestone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMilestoneInput() {
    return this._notMilestone;
  }

  // not_my_reaction_emoji - computed: false, optional: true, required: false
  private _notMyReactionEmoji?: string[]; 
  public get notMyReactionEmoji() {
    return this.getListAttribute('not_my_reaction_emoji');
  }
  public set notMyReactionEmoji(value: string[]) {
    this._notMyReactionEmoji = value;
  }
  public resetNotMyReactionEmoji() {
    this._notMyReactionEmoji = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMyReactionEmojiInput() {
    return this._notMyReactionEmoji;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // updated_after - computed: false, optional: true, required: false
  private _updatedAfter?: string; 
  public get updatedAfter() {
    return this.getStringAttribute('updated_after');
  }
  public set updatedAfter(value: string) {
    this._updatedAfter = value;
  }
  public resetUpdatedAfter() {
    this._updatedAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAfterInput() {
    return this._updatedAfter;
  }

  // updated_before - computed: false, optional: true, required: false
  private _updatedBefore?: string; 
  public get updatedBefore() {
    return this.getStringAttribute('updated_before');
  }
  public set updatedBefore(value: string) {
    this._updatedBefore = value;
  }
  public resetUpdatedBefore() {
    this._updatedBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedBeforeInput() {
    return this._updatedBefore;
  }

  // weight - computed: false, optional: true, required: false
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

  // with_labels_details - computed: false, optional: true, required: false
  private _withLabelsDetails?: boolean | cdktf.IResolvable; 
  public get withLabelsDetails() {
    return this.getBooleanAttribute('with_labels_details');
  }
  public set withLabelsDetails(value: boolean | cdktf.IResolvable) {
    this._withLabelsDetails = value;
  }
  public resetWithLabelsDetails() {
    this._withLabelsDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withLabelsDetailsInput() {
    return this._withLabelsDetails;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignee_id: cdktf.numberToTerraform(this._assigneeId),
      assignee_username: cdktf.stringToTerraform(this._assigneeUsername),
      author_id: cdktf.numberToTerraform(this._authorId),
      confidential: cdktf.booleanToTerraform(this._confidential),
      created_after: cdktf.stringToTerraform(this._createdAfter),
      created_before: cdktf.stringToTerraform(this._createdBefore),
      due_date: cdktf.stringToTerraform(this._dueDate),
      id: cdktf.stringToTerraform(this._id),
      iids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._iids),
      issue_type: cdktf.stringToTerraform(this._issueType),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      milestone: cdktf.stringToTerraform(this._milestone),
      my_reaction_emoji: cdktf.stringToTerraform(this._myReactionEmoji),
      not_assignee_id: cdktf.listMapper(cdktf.numberToTerraform, false)(this._notAssigneeId),
      not_author_id: cdktf.listMapper(cdktf.numberToTerraform, false)(this._notAuthorId),
      not_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notLabels),
      not_milestone: cdktf.stringToTerraform(this._notMilestone),
      not_my_reaction_emoji: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notMyReactionEmoji),
      order_by: cdktf.stringToTerraform(this._orderBy),
      project: cdktf.stringToTerraform(this._project),
      scope: cdktf.stringToTerraform(this._scope),
      search: cdktf.stringToTerraform(this._search),
      sort: cdktf.stringToTerraform(this._sort),
      updated_after: cdktf.stringToTerraform(this._updatedAfter),
      updated_before: cdktf.stringToTerraform(this._updatedBefore),
      weight: cdktf.numberToTerraform(this._weight),
      with_labels_details: cdktf.booleanToTerraform(this._withLabelsDetails),
    };
  }
}
