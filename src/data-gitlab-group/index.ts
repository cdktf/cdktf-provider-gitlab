// https://www.terraform.io/docs/providers/gitlab/d/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full path of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group#full_path DataGitlabGroup#full_path}
  */
  readonly fullPath?: string;
  /**
  * The ID of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group#group_id DataGitlabGroup#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group#id DataGitlabGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/group gitlab_group}
*/
export class DataGitlabGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/d/group gitlab_group} Data Source
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
        providerVersion: '15.7.1',
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
    this._fullPath = config.fullPath;
    this._groupId = config.groupId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // visibility_level - computed: true, optional: false, required: false
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
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
}
