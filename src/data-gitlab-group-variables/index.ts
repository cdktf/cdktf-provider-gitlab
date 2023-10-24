// https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_variables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabGroupVariablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment scope of the variable. Defaults to all environment (`*`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_variables#environment_scope DataGitlabGroupVariables#environment_scope}
  */
  readonly environmentScope?: string;
  /**
  * The name or id of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_variables#group DataGitlabGroupVariables#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_variables#id DataGitlabGroupVariables#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataGitlabGroupVariablesVariables {
}

export function dataGitlabGroupVariablesVariablesToTerraform(struct?: DataGitlabGroupVariablesVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGitlabGroupVariablesVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabGroupVariablesVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabGroupVariablesVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_scope - computed: true, optional: false, required: false
  public get environmentScope() {
    return this.getStringAttribute('environment_scope');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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
}

export class DataGitlabGroupVariablesVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabGroupVariablesVariablesOutputReference {
    return new DataGitlabGroupVariablesVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_variables gitlab_group_variables}
*/
export class DataGitlabGroupVariables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_variables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabGroupVariables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabGroupVariables to import
  * @param importFromId The id of the existing DataGitlabGroupVariables that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_variables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabGroupVariables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_variables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_variables gitlab_group_variables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabGroupVariablesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabGroupVariablesConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_variables',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.5.0',
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
    this._environmentScope = config.environmentScope;
    this._group = config.group;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_scope - computed: false, optional: true, required: false
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

  // variables - computed: true, optional: false, required: false
  private _variables = new DataGitlabGroupVariablesVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_scope: cdktf.stringToTerraform(this._environmentScope),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
