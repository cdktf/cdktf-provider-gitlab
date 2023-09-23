// https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_epic_board
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupEpicBoardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or URL-encoded path of the group owned by the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_epic_board#group GroupEpicBoard#group}
  */
  readonly group: string;
  /**
  * The name of the board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_epic_board#name GroupEpicBoard#name}
  */
  readonly name: string;
  /**
  * lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_epic_board#lists GroupEpicBoard#lists}
  */
  readonly lists?: GroupEpicBoardLists[] | cdktf.IResolvable;
}
export interface GroupEpicBoardLists {
  /**
  * The ID of the label the list should be scoped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_epic_board#label_id GroupEpicBoard#label_id}
  */
  readonly labelId?: number;
}

export function groupEpicBoardListsToTerraform(struct?: GroupEpicBoardLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_id: cdktf.numberToTerraform(struct!.labelId),
  }
}

export class GroupEpicBoardListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupEpicBoardLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupEpicBoardLists | cdktf.IResolvable | undefined) {
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

export class GroupEpicBoardListsList extends cdktf.ComplexList {
  public internalValue? : GroupEpicBoardLists[] | cdktf.IResolvable

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
  public get(index: number): GroupEpicBoardListsOutputReference {
    return new GroupEpicBoardListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_epic_board gitlab_group_epic_board}
*/
export class GroupEpicBoard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_epic_board";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_epic_board gitlab_group_epic_board} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupEpicBoardConfig
  */
  public constructor(scope: Construct, id: string, config: GroupEpicBoardConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_epic_board',
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
    this._group = config.group;
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
  private _lists = new GroupEpicBoardListsList(this, "lists", true);
  public get lists() {
    return this._lists;
  }
  public putLists(value: GroupEpicBoardLists[] | cdktf.IResolvable) {
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
      name: cdktf.stringToTerraform(this._name),
      lists: cdktf.listMapper(groupEpicBoardListsToTerraform, true)(this._lists.internalValue),
    };
  }
}
