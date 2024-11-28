/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRunnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access level of the runner. Valid values are: `not_protected`, `ref_protected`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#access_level UserRunner#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Description of the runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#description UserRunner#description}
  */
  readonly description?: string;
  /**
  * The ID of the group that the runner is created in. Required if runner_type is group_type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#group_id UserRunner#group_id}
  */
  readonly groupId?: number;
  /**
  * Specifies if the runner should be locked for the current project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#locked UserRunner#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Free-form maintenance notes for the runner (1024 characters) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#maintenance_note UserRunner#maintenance_note}
  */
  readonly maintenanceNote?: string;
  /**
  * Maximum timeout that limits the amount of time (in seconds) that runners can run jobs. Must be at least 600 (10 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#maximum_timeout UserRunner#maximum_timeout}
  */
  readonly maximumTimeout?: number;
  /**
  * Specifies if the runner should ignore new jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#paused UserRunner#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The ID of the project that the runner is created in. Required if runner_type is project_type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#project_id UserRunner#project_id}
  */
  readonly projectId?: number;
  /**
  * The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#runner_type UserRunner#runner_type}
  */
  readonly runnerType: string;
  /**
  * A list of runner tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#tag_list UserRunner#tag_list}
  */
  readonly tagList?: string[];
  /**
  * Specifies if the runner should handle untagged jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#untagged UserRunner#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner gitlab_user_runner}
*/
export class UserRunner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_user_runner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRunner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRunner to import
  * @param importFromId The id of the existing UserRunner that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRunner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_user_runner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/user_runner gitlab_user_runner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRunnerConfig
  */
  public constructor(scope: Construct, id: string, config: UserRunnerConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_user_runner',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.6.1',
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
    this._accessLevel = config.accessLevel;
    this._description = config.description;
    this._groupId = config.groupId;
    this._locked = config.locked;
    this._maintenanceNote = config.maintenanceNote;
    this._maximumTimeout = config.maximumTimeout;
    this._paused = config.paused;
    this._projectId = config.projectId;
    this._runnerType = config.runnerType;
    this._tagList = config.tagList;
    this._untagged = config.untagged;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: true, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // description - computed: true, optional: true, required: false
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

  // group_id - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // maintenance_note - computed: true, optional: true, required: false
  private _maintenanceNote?: string; 
  public get maintenanceNote() {
    return this.getStringAttribute('maintenance_note');
  }
  public set maintenanceNote(value: string) {
    this._maintenanceNote = value;
  }
  public resetMaintenanceNote() {
    this._maintenanceNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceNoteInput() {
    return this._maintenanceNote;
  }

  // maximum_timeout - computed: true, optional: true, required: false
  private _maximumTimeout?: number; 
  public get maximumTimeout() {
    return this.getNumberAttribute('maximum_timeout');
  }
  public set maximumTimeout(value: number) {
    this._maximumTimeout = value;
  }
  public resetMaximumTimeout() {
    this._maximumTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTimeoutInput() {
    return this._maximumTimeout;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // runner_type - computed: false, optional: false, required: true
  private _runnerType?: string; 
  public get runnerType() {
    return this.getStringAttribute('runner_type');
  }
  public set runnerType(value: string) {
    this._runnerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerTypeInput() {
    return this._runnerType;
  }

  // tag_list - computed: true, optional: true, required: false
  private _tagList?: string[]; 
  public get tagList() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_list'));
  }
  public set tagList(value: string[]) {
    this._tagList = value;
  }
  public resetTagList() {
    this._tagList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagListInput() {
    return this._tagList;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // untagged - computed: true, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.numberToTerraform(this._groupId),
      locked: cdktf.booleanToTerraform(this._locked),
      maintenance_note: cdktf.stringToTerraform(this._maintenanceNote),
      maximum_timeout: cdktf.numberToTerraform(this._maximumTimeout),
      paused: cdktf.booleanToTerraform(this._paused),
      project_id: cdktf.numberToTerraform(this._projectId),
      runner_type: cdktf.stringToTerraform(this._runnerType),
      tag_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagList),
      untagged: cdktf.booleanToTerraform(this._untagged),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintenance_note: {
        value: cdktf.stringToHclTerraform(this._maintenanceNote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_timeout: {
        value: cdktf.numberToHclTerraform(this._maximumTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runner_type: {
        value: cdktf.stringToHclTerraform(this._runnerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      untagged: {
        value: cdktf.booleanToHclTerraform(this._untagged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
