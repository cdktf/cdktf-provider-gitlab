/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#description ProjectVariable#description}
  */
  readonly description?: string;
  /**
  * The environment scope of the variable. Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#environment_scope ProjectVariable#environment_scope}
  */
  readonly environmentScope?: string;
  /**
  * If set to `true`, the value of the variable will be hidden in the CI/CD User Interface. The value must meet the [hidden requirements](https://docs.gitlab.com/ci/variables/#hide-a-cicd-variable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#hidden ProjectVariable#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * The name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#key ProjectVariable#key}
  */
  readonly key: string;
  /**
  * If set to `true`, the value of the variable will be masked in job logs. The value must meet the [masking requirements](https://docs.gitlab.com/ee/ci/variables/#mask-a-cicd-variable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#masked ProjectVariable#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * The name or id of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#project ProjectVariable#project}
  */
  readonly project: string;
  /**
  * If set to `true`, the variable will be passed only to pipelines running on protected branches and tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#protected ProjectVariable#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
  /**
  * Whether the variable is treated as a raw string. When true, variables in the value are not expanded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#raw ProjectVariable#raw}
  */
  readonly raw?: boolean | cdktf.IResolvable;
  /**
  * The value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#value ProjectVariable#value}
  */
  readonly value: string;
  /**
  * The type of a variable. Valid values are: `env_var`, `file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#variable_type ProjectVariable#variable_type}
  */
  readonly variableType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable gitlab_project_variable}
*/
export class ProjectVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectVariable to import
  * @param importFromId The id of the existing ProjectVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_variable gitlab_project_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectVariableConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_variable',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.1.1',
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
    this._description = config.description;
    this._environmentScope = config.environmentScope;
    this._hidden = config.hidden;
    this._key = config.key;
    this._masked = config.masked;
    this._project = config.project;
    this._protected = config.protected;
    this._raw = config.raw;
    this._value = config.value;
    this._variableType = config.variableType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // environment_scope - computed: true, optional: true, required: false
  private _environmentScope?: string; 
  public get environmentScope() {
    return this.getStringAttribute('environment_scope');
  }
  public set environmentScope(value: string) {
    this._environmentScope = value;
  }
  public resetEnvironmentScope() {
    this._environmentScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentScopeInput() {
    return this._environmentScope;
  }

  // hidden - computed: true, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // masked - computed: true, optional: true, required: false
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

  // protected - computed: true, optional: true, required: false
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

  // raw - computed: true, optional: true, required: false
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

  // variable_type - computed: true, optional: true, required: false
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
      environment_scope: cdktf.stringToTerraform(this._environmentScope),
      hidden: cdktf.booleanToTerraform(this._hidden),
      key: cdktf.stringToTerraform(this._key),
      masked: cdktf.booleanToTerraform(this._masked),
      project: cdktf.stringToTerraform(this._project),
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
      environment_scope: {
        value: cdktf.stringToHclTerraform(this._environmentScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden: {
        value: cdktf.booleanToHclTerraform(this._hidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
