/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the variable. Maximum of 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable#description InstanceVariable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable#id InstanceVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable#key InstanceVariable#key}
  */
  readonly key: string;
  /**
  * If set to `true`, the value of the variable will be hidden in job logs. The value must meet the [masking requirements](https://docs.gitlab.com/ee/ci/variables/#masked-variables). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable#masked InstanceVariable#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * If set to `true`, the variable will be passed only to pipelines running on protected branches and tags. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable#protected InstanceVariable#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
  /**
  * Whether the variable is treated as a raw string. Default: false. When true, variables in the value are not expanded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable#raw InstanceVariable#raw}
  */
  readonly raw?: boolean | cdktf.IResolvable;
  /**
  * The value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable#value InstanceVariable#value}
  */
  readonly value: string;
  /**
  * The type of a variable. Valid values are: `env_var`, `file`. Default is `env_var`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable#variable_type InstanceVariable#variable_type}
  */
  readonly variableType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable gitlab_instance_variable}
*/
export class InstanceVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_instance_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceVariable to import
  * @param importFromId The id of the existing InstanceVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_instance_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/instance_variable gitlab_instance_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceVariableConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_instance_variable',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.3.1',
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
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._masked = config.masked;
    this._protected = config.protected;
    this._raw = config.raw;
    this._value = config.value;
    this._variableType = config.variableType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // masked - computed: false, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
  }

  // protected - computed: false, optional: true, required: false
  private _protected?: boolean | cdktf.IResolvable; 
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
  public set protected(value: boolean | cdktf.IResolvable) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected;
  }

  // raw - computed: false, optional: true, required: false
  private _raw?: boolean | cdktf.IResolvable; 
  public get raw() {
    return this.getBooleanAttribute('raw');
  }
  public set raw(value: boolean | cdktf.IResolvable) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable_type - computed: false, optional: true, required: false
  private _variableType?: string; 
  public get variableType() {
    return this.getStringAttribute('variable_type');
  }
  public set variableType(value: string) {
    this._variableType = value;
  }
  public resetVariableType() {
    this._variableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableTypeInput() {
    return this._variableType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      masked: cdktf.booleanToTerraform(this._masked),
      protected: cdktf.booleanToTerraform(this._protected),
      raw: cdktf.booleanToTerraform(this._raw),
      value: cdktf.stringToTerraform(this._value),
      variable_type: cdktf.stringToTerraform(this._variableType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      masked: {
        value: cdktf.booleanToHclTerraform(this._masked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protected: {
        value: cdktf.booleanToHclTerraform(this._protected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      raw: {
        value: cdktf.booleanToHclTerraform(this._raw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_type: {
        value: cdktf.stringToHclTerraform(this._variableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
