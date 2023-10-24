// https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectIssueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issue#id DataGitlabProjectIssue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The internal ID of the project's issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issue#iid DataGitlabProjectIssue#iid}
  */
  readonly iid: number;
  /**
  * The name or ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issue#project DataGitlabProjectIssue#project}
  */
  readonly project: string;
}
export interface DataGitlabProjectIssueTaskCompletionStatus {
}

export function dataGitlabProjectIssueTaskCompletionStatusToTerraform(struct?: DataGitlabProjectIssueTaskCompletionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGitlabProjectIssueTaskCompletionStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectIssueTaskCompletionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectIssueTaskCompletionStatus | undefined) {
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

export class DataGitlabProjectIssueTaskCompletionStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectIssueTaskCompletionStatusOutputReference {
    return new DataGitlabProjectIssueTaskCompletionStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issue gitlab_project_issue}
*/
export class DataGitlabProjectIssue extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_issue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectIssue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectIssue to import
  * @param importFromId The id of the existing DataGitlabProjectIssue that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectIssue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_issue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issue gitlab_project_issue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectIssueConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectIssueConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_issue',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.5.0',
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
    this._id = config.id;
    this._iid = config.iid;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // iid - computed: false, optional: false, required: true
  private _iid?: number; 
  public get iid() {
    return this.getNumberAttribute('iid');
  }
  public set iid(value: number) {
    this._iid = value;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscribed - computed: true, optional: false, required: false
  public get subscribed() {
    return this.getBooleanAttribute('subscribed');
  }

  // task_completion_status - computed: true, optional: false, required: false
  private _taskCompletionStatus = new DataGitlabProjectIssueTaskCompletionStatusList(this, "task_completion_status", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      iid: cdktf.numberToTerraform(this._iid),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
