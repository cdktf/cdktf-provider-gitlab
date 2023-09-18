// https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/group_issue_board
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupIssueBoardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or URL-encoded path of the group owned by the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/group_issue_board#group GroupIssueBoard#group}
  */
  readonly group: string;
  /**
  * The milestone the board should be scoped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/group_issue_board#milestone_id GroupIssueBoard#milestone_id}
  */
  readonly milestoneId?: number;
  /**
  * The name of the board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/group_issue_board#name GroupIssueBoard#name}
  */
  readonly name: string;
  /**
  * lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/group_issue_board#lists GroupIssueBoard#lists}
  */
  readonly lists?: GroupIssueBoardLists[] | cdktf.IResolvable;
}
export interface GroupIssueBoardLists {
  /**
  * The ID of the label the list should be scoped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/group_issue_board#label_id GroupIssueBoard#label_id}
  */
  readonly labelId?: number;
}

export function groupIssueBoardListsToTerraform(struct?: GroupIssueBoardLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_id: cdktf.numberToTerraform(struct!.labelId),
  }
}

export class GroupIssueBoardListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupIssueBoardLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelId = this._labelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupIssueBoardLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelId = value.labelId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }
}

export class GroupIssueBoardListsList extends cdktf.ComplexList {
  public internalValue? : GroupIssueBoardLists[] | cdktf.IResolvable

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
  public get(index: number): GroupIssueBoardListsOutputReference {
    return new GroupIssueBoardListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/group_issue_board gitlab_group_issue_board}
*/
export class GroupIssueBoard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_issue_board";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/group_issue_board gitlab_group_issue_board} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupIssueBoardConfig
  */
  public constructor(scope: Construct, id: string, config: GroupIssueBoardConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_issue_board',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.3.0',
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
    this._group = config.group;
    this._milestoneId = config.milestoneId;
    this._name = config.name;
    this._lists.internalValue = config.lists;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // lists - computed: false, optional: true, required: false
  private _lists = new GroupIssueBoardListsList(this, "lists", true);
  public get lists() {
    return this._lists;
  }
  public putLists(value: GroupIssueBoardLists[] | cdktf.IResolvable) {
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
      group: cdktf.stringToTerraform(this._group),
      milestone_id: cdktf.numberToTerraform(this._milestoneId),
      name: cdktf.stringToTerraform(this._name),
      lists: cdktf.listMapper(groupIssueBoardListsToTerraform, true)(this._lists.internalValue),
    };
  }
}
