/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RunnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access_level of the runner. Valid values are: `not_protected`, `ref_protected`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#access_level Runner#access_level}
  */
  readonly accessLevel?: string;
  /**
  * The runner's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#description Runner#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#id Runner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the runner should be locked for current project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#locked Runner#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Free-form maintenance notes for the runner (1024 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#maintenance_note Runner#maintenance_note}
  */
  readonly maintenanceNote?: string;
  /**
  * Maximum timeout set when this runner handles the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#maximum_timeout Runner#maximum_timeout}
  */
  readonly maximumTimeout?: number;
  /**
  * Whether the runner should ignore new jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#paused Runner#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The registration token used to register the runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#registration_token Runner#registration_token}
  */
  readonly registrationToken: string;
  /**
  * Whether the runner should handle untagged jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#run_untagged Runner#run_untagged}
  */
  readonly runUntagged?: boolean | cdktf.IResolvable;
  /**
  * List of runner’s tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#tag_list Runner#tag_list}
  */
  readonly tagList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner gitlab_runner}
*/
export class Runner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_runner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Runner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Runner to import
  * @param importFromId The id of the existing Runner that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Runner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_runner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/runner gitlab_runner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RunnerConfig
  */
  public constructor(scope: Construct, id: string, config: RunnerConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_runner',
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
    this._accessLevel = config.accessLevel;
    this._description = config.description;
    this._id = config.id;
    this._locked = config.locked;
    this._maintenanceNote = config.maintenanceNote;
    this._maximumTimeout = config.maximumTimeout;
    this._paused = config.paused;
    this._registrationToken = config.registrationToken;
    this._runUntagged = config.runUntagged;
    this._tagList = config.tagList;
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

  // authentication_token - computed: true, optional: false, required: false
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
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

  // maintenance_note - computed: false, optional: true, required: false
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

  // maximum_timeout - computed: false, optional: true, required: false
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

  // registration_token - computed: false, optional: false, required: true
  private _registrationToken?: string; 
  public get registrationToken() {
    return this.getStringAttribute('registration_token');
  }
  public set registrationToken(value: string) {
    this._registrationToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationTokenInput() {
    return this._registrationToken;
  }

  // run_untagged - computed: true, optional: true, required: false
  private _runUntagged?: boolean | cdktf.IResolvable; 
  public get runUntagged() {
    return this.getBooleanAttribute('run_untagged');
  }
  public set runUntagged(value: boolean | cdktf.IResolvable) {
    this._runUntagged = value;
  }
  public resetRunUntagged() {
    this._runUntagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runUntaggedInput() {
    return this._runUntagged;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag_list - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      locked: cdktf.booleanToTerraform(this._locked),
      maintenance_note: cdktf.stringToTerraform(this._maintenanceNote),
      maximum_timeout: cdktf.numberToTerraform(this._maximumTimeout),
      paused: cdktf.booleanToTerraform(this._paused),
      registration_token: cdktf.stringToTerraform(this._registrationToken),
      run_untagged: cdktf.booleanToTerraform(this._runUntagged),
      tag_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagList),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      registration_token: {
        value: cdktf.stringToHclTerraform(this._registrationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_untagged: {
        value: cdktf.booleanToHclTerraform(this._runUntagged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
