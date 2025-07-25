/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full path of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/group#full_path DataGitlabGroup#full_path}
  */
  readonly fullPath?: string;
  /**
  * The ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/group#group_id DataGitlabGroup#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/group#id DataGitlabGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataGitlabGroupSharedWithGroups {
}

export function dataGitlabGroupSharedWithGroupsToTerraform(struct?: DataGitlabGroupSharedWithGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabGroupSharedWithGroupsToHclTerraform(struct?: DataGitlabGroupSharedWithGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabGroupSharedWithGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabGroupSharedWithGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabGroupSharedWithGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // group_access_level - computed: true, optional: false, required: false
  public get groupAccessLevel() {
    return this.getNumberAttribute('group_access_level');
  }

  // group_full_path - computed: true, optional: false, required: false
  public get groupFullPath() {
    return this.getStringAttribute('group_full_path');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

export class DataGitlabGroupSharedWithGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabGroupSharedWithGroupsOutputReference {
    return new DataGitlabGroupSharedWithGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/group gitlab_group}
*/
export class DataGitlabGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabGroup to import
  * @param importFromId The id of the existing DataGitlabGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/group gitlab_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.2.0',
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
    this._fullPath = config.fullPath;
    this._groupId = config.groupId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // default_branch_protection - computed: true, optional: false, required: false
  public get defaultBranchProtection() {
    return this.getNumberAttribute('default_branch_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // extra_shared_runners_minutes_limit - computed: true, optional: false, required: false
  public get extraSharedRunnersMinutesLimit() {
    return this.getNumberAttribute('extra_shared_runners_minutes_limit');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // full_path - computed: true, optional: true, required: false
  private _fullPath?: string; 
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }
  public set fullPath(value: string) {
    this._fullPath = value;
  }
  public resetFullPath() {
    this._fullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathInput() {
    return this._fullPath;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // lfs_enabled - computed: true, optional: false, required: false
  public get lfsEnabled() {
    return this.getBooleanAttribute('lfs_enabled');
  }

  // membership_lock - computed: true, optional: false, required: false
  public get membershipLock() {
    return this.getBooleanAttribute('membership_lock');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // prevent_forking_outside_group - computed: true, optional: false, required: false
  public get preventForkingOutsideGroup() {
    return this.getBooleanAttribute('prevent_forking_outside_group');
  }

  // request_access_enabled - computed: true, optional: false, required: false
  public get requestAccessEnabled() {
    return this.getBooleanAttribute('request_access_enabled');
  }

  // runners_token - computed: true, optional: false, required: false
  public get runnersToken() {
    return this.getStringAttribute('runners_token');
  }

  // shared_runners_minutes_limit - computed: true, optional: false, required: false
  public get sharedRunnersMinutesLimit() {
    return this.getNumberAttribute('shared_runners_minutes_limit');
  }

  // shared_runners_setting - computed: true, optional: false, required: false
  public get sharedRunnersSetting() {
    return this.getStringAttribute('shared_runners_setting');
  }

  // shared_with_groups - computed: true, optional: false, required: false
  private _sharedWithGroups = new DataGitlabGroupSharedWithGroupsList(this, "shared_with_groups", false);
  public get sharedWithGroups() {
    return this._sharedWithGroups;
  }

  // visibility_level - computed: true, optional: false, required: false
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // wiki_access_level - computed: true, optional: false, required: false
  public get wikiAccessLevel() {
    return this.getStringAttribute('wiki_access_level');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_path: cdktf.stringToTerraform(this._fullPath),
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      full_path: {
        value: cdktf.stringToHclTerraform(this._fullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
