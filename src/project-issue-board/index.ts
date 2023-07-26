/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIssueBoardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The assignee the board should be scoped to. Requires a GitLab EE license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}
  */
  readonly assigneeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The list of label names which the board should be scoped to. Requires a GitLab EE license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#labels ProjectIssueBoard#labels}
  */
  readonly labels?: string[];
  /**
  * The milestone the board should be scoped to. Requires a GitLab EE license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}
  */
  readonly milestoneId?: number;
  /**
  * The name of the board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#name ProjectIssueBoard#name}
  */
  readonly name: string;
  /**
  * The ID or full path of the project maintained by the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#project ProjectIssueBoard#project}
  */
  readonly project: string;
  /**
  * The weight range from 0 to 9, to which the board should be scoped to. Requires a GitLab EE license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#weight ProjectIssueBoard#weight}
  */
  readonly weight?: number;
  /**
  * lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#lists ProjectIssueBoard#lists}
  */
  readonly lists?: ProjectIssueBoardLists[] | cdktf.IResolvable;
}
export interface ProjectIssueBoardLists {
  /**
  * The ID of the assignee the list should be scoped to. Requires a GitLab EE license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}
  */
  readonly assigneeId?: number;
  /**
  * The ID of the iteration the list should be scoped to. Requires a GitLab EE license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#iteration_id ProjectIssueBoard#iteration_id}
  */
  readonly iterationId?: number;
  /**
  * The ID of the label the list should be scoped to. Requires a GitLab EE license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#label_id ProjectIssueBoard#label_id}
  */
  readonly labelId?: number;
  /**
  * The ID of the milestone the list should be scoped to. Requires a GitLab EE license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}
  */
  readonly milestoneId?: number;
}

export function projectIssueBoardListsToTerraform(struct?: ProjectIssueBoardLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignee_id: cdktf.numberToTerraform(struct!.assigneeId),
    iteration_id: cdktf.numberToTerraform(struct!.iterationId),
    label_id: cdktf.numberToTerraform(struct!.labelId),
    milestone_id: cdktf.numberToTerraform(struct!.milestoneId),
  }
}

export class ProjectIssueBoardListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectIssueBoardLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assigneeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assigneeId = this._assigneeId;
    }
    if (this._iterationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.iterationId = this._iterationId;
    }
    if (this._labelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelId = this._labelId;
    }
    if (this._milestoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.milestoneId = this._milestoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIssueBoardLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assigneeId = undefined;
      this._iterationId = undefined;
      this._labelId = undefined;
      this._milestoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assigneeId = value.assigneeId;
      this._iterationId = value.iterationId;
      this._labelId = value.labelId;
      this._milestoneId = value.milestoneId;
    }
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // iteration_id - computed: false, optional: true, required: false
  private _iterationId?: number; 
  public get iterationId() {
    return this.getNumberAttribute('iteration_id');
  }
  public set iterationId(value: number) {
    this._iterationId = value;
  }
  public resetIterationId() {
    this._iterationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationIdInput() {
    return this._iterationId;
  }

  // label_id - computed: false, optional: true, required: false
  private _labelId?: number; 
  public get labelId() {
    return this.getNumberAttribute('label_id');
  }
  public set labelId(value: number) {
    this._labelId = value;
  }
  public resetLabelId() {
    this._labelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelIdInput() {
    return this._labelId;
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

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }
}

export class ProjectIssueBoardListsList extends cdktf.ComplexList {
  public internalValue? : ProjectIssueBoardLists[] | cdktf.IResolvable

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
  public get(index: number): ProjectIssueBoardListsOutputReference {
    return new ProjectIssueBoardListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board gitlab_project_issue_board}
*/
export class ProjectIssueBoard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_issue_board";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/resources/project_issue_board gitlab_project_issue_board} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIssueBoardConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIssueBoardConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_issue_board',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.2.0',
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
    this._assigneeId = config.assigneeId;
    this._id = config.id;
    this._labels = config.labels;
    this._milestoneId = config.milestoneId;
    this._name = config.name;
    this._project = config.project;
    this._weight = config.weight;
    this._lists.internalValue = config.lists;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // lists - computed: false, optional: true, required: false
  private _lists = new ProjectIssueBoardListsList(this, "lists", false);
  public get lists() {
    return this._lists;
  }
  public putLists(value: ProjectIssueBoardLists[] | cdktf.IResolvable) {
    this._lists.internalValue = value;
  }
  public resetLists() {
    this._lists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listsInput() {
    return this._lists.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignee_id: cdktf.numberToTerraform(this._assigneeId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      milestone_id: cdktf.numberToTerraform(this._milestoneId),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      weight: cdktf.numberToTerraform(this._weight),
      lists: cdktf.listMapper(projectIssueBoardListsToTerraform, true)(this._lists.internalValue),
    };
  }
}
