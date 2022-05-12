// https://www.terraform.io/docs/providers/gitlab/d/project_variables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectVariablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment scope of the variable. Defaults to all environment (`*`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_variables#environment_scope DataGitlabProjectVariables#environment_scope}
  */
  readonly environmentScope?: string;
  /**
  * The name or id of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_variables#project DataGitlabProjectVariables#project}
  */
  readonly project: string;
}
export interface DataGitlabProjectVariablesVariables {
}

export function dataGitlabProjectVariablesVariablesToTerraform(struct?: DataGitlabProjectVariablesVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGitlabProjectVariablesVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectVariablesVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectVariablesVariables | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // masked - computed: true, optional: false, required: false
  public get masked() {
    return this.getBooleanAttribute('masked');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
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

export class DataGitlabProjectVariablesVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectVariablesVariablesOutputReference {
    return new DataGitlabProjectVariablesVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/project_variables gitlab_project_variables}
*/
export class DataGitlabProjectVariables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_variables";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/d/project_variables gitlab_project_variables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectVariablesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectVariablesConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_variables',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._environmentScope = config.environmentScope;
    this._project = config.project;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // variables - computed: true, optional: false, required: false
  private _variables = new DataGitlabProjectVariablesVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_scope: cdktf.stringToTerraform(this._environmentScope),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
