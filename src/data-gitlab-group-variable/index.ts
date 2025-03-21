// https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/group_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabGroupVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment scope of the variable. Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/group_variable#environment_scope DataGitlabGroupVariable#environment_scope}
  */
  readonly environmentScope?: string;
  /**
  * The name or id of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/group_variable#group DataGitlabGroupVariable#group}
  */
  readonly group: string;
  /**
  * The name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/group_variable#key DataGitlabGroupVariable#key}
  */
  readonly key: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/group_variable gitlab_group_variable}
*/
export class DataGitlabGroupVariable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabGroupVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabGroupVariable to import
  * @param importFromId The id of the existing DataGitlabGroupVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/group_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabGroupVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/group_variable gitlab_group_variable} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabGroupVariableConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabGroupVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_variable',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.10.0',
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
    this._environmentScope = config.environmentScope;
    this._group = config.group;
    this._key = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // masked - computed: true, optional: false, required: false
  public get masked() {
    return this.getBooleanAttribute('masked');
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getBooleanAttribute('raw');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable_type - computed: true, optional: false, required: false
  public get variableType() {
    return this.getStringAttribute('variable_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_scope: cdktf.stringToTerraform(this._environmentScope),
      group: cdktf.stringToTerraform(this._group),
      key: cdktf.stringToTerraform(this._key),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_scope: {
        value: cdktf.stringToHclTerraform(this._environmentScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
