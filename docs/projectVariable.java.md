# `projectVariable` Submodule <a name="`projectVariable` Submodule" id="@cdktf/provider-gitlab.projectVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectVariable <a name="ProjectVariable" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable gitlab_project_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_variable.ProjectVariable;

ProjectVariable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
    .project(java.lang.String)
    .value(java.lang.String)
//  .description(java.lang.String)
//  .environmentScope(java.lang.String)
//  .hidden(java.lang.Boolean|IResolvable)
//  .masked(java.lang.Boolean|IResolvable)
//  .protected(java.lang.Boolean|IResolvable)
//  .raw(java.lang.Boolean|IResolvable)
//  .variableType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.environmentScope">environmentScope</a></code> | <code>java.lang.String</code> | The environment scope of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.hidden">hidden</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the value of the variable will be hidden in the CI/CD User Interface. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.masked">masked</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the value of the variable will be masked in job logs. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.protected">protected</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the variable will be passed only to pipelines running on protected branches and tags. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.raw">raw</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the variable is treated as a raw string. When true, variables in the value are not expanded. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.variableType">variableType</a></code> | <code>java.lang.String</code> | The type of a variable. Valid values are: `env_var`, `file`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#key ProjectVariable#key}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#project ProjectVariable#project}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#value ProjectVariable#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#description ProjectVariable#description}

---

##### `environmentScope`<sup>Optional</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.environmentScope"></a>

- *Type:* java.lang.String

The environment scope of the variable.

Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#environment_scope ProjectVariable#environment_scope}

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.hidden"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to `true`, the value of the variable will be hidden in the CI/CD User Interface.

The value must meet the [hidden requirements](https://docs.gitlab.com/ci/variables/#hide-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#hidden ProjectVariable#hidden}

---

##### `masked`<sup>Optional</sup> <a name="masked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.masked"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to `true`, the value of the variable will be masked in job logs.

The value must meet the [masking requirements](https://docs.gitlab.com/ee/ci/variables/#mask-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#masked ProjectVariable#masked}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.protected"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to `true`, the variable will be passed only to pipelines running on protected branches and tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#protected ProjectVariable#protected}

---

##### `raw`<sup>Optional</sup> <a name="raw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.raw"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the variable is treated as a raw string. When true, variables in the value are not expanded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#raw ProjectVariable#raw}

---

##### `variableType`<sup>Optional</sup> <a name="variableType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.variableType"></a>

- *Type:* java.lang.String

The type of a variable. Valid values are: `env_var`, `file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#variable_type ProjectVariable#variable_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetEnvironmentScope">resetEnvironmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetHidden">resetHidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetMasked">resetMasked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetProtected">resetProtected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetRaw">resetRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetVariableType">resetVariableType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentScope` <a name="resetEnvironmentScope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetEnvironmentScope"></a>

```java
public void resetEnvironmentScope()
```

##### `resetHidden` <a name="resetHidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetHidden"></a>

```java
public void resetHidden()
```

##### `resetMasked` <a name="resetMasked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetMasked"></a>

```java
public void resetMasked()
```

##### `resetProtected` <a name="resetProtected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetProtected"></a>

```java
public void resetProtected()
```

##### `resetRaw` <a name="resetRaw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetRaw"></a>

```java
public void resetRaw()
```

##### `resetVariableType` <a name="resetVariableType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetVariableType"></a>

```java
public void resetVariableType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectVariable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_variable.ProjectVariable;

ProjectVariable.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_variable.ProjectVariable;

ProjectVariable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_variable.ProjectVariable;

ProjectVariable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_variable.ProjectVariable;

ProjectVariable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectVariable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScopeInput">environmentScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hiddenInput">hiddenInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.maskedInput">maskedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protectedInput">protectedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.rawInput">rawInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableTypeInput">variableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScope">environmentScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hidden">hidden</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.masked">masked</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protected">protected</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.raw">raw</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentScopeInput`<sup>Optional</sup> <a name="environmentScopeInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScopeInput"></a>

```java
public java.lang.String getEnvironmentScopeInput();
```

- *Type:* java.lang.String

---

##### `hiddenInput`<sup>Optional</sup> <a name="hiddenInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hiddenInput"></a>

```java
public java.lang.Boolean|IResolvable getHiddenInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `maskedInput`<sup>Optional</sup> <a name="maskedInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.maskedInput"></a>

```java
public java.lang.Boolean|IResolvable getMaskedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `protectedInput`<sup>Optional</sup> <a name="protectedInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protectedInput"></a>

```java
public java.lang.Boolean|IResolvable getProtectedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rawInput`<sup>Optional</sup> <a name="rawInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.rawInput"></a>

```java
public java.lang.Boolean|IResolvable getRawInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableTypeInput"></a>

```java
public java.lang.String getVariableTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentScope`<sup>Required</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScope"></a>

```java
public java.lang.String getEnvironmentScope();
```

- *Type:* java.lang.String

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hidden"></a>

```java
public java.lang.Boolean|IResolvable getHidden();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `masked`<sup>Required</sup> <a name="masked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.masked"></a>

```java
public java.lang.Boolean|IResolvable getMasked();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protected"></a>

```java
public java.lang.Boolean|IResolvable getProtected();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `raw`<sup>Required</sup> <a name="raw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.raw"></a>

```java
public java.lang.Boolean|IResolvable getRaw();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectVariableConfig <a name="ProjectVariableConfig" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_variable.ProjectVariableConfig;

ProjectVariableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
    .project(java.lang.String)
    .value(java.lang.String)
//  .description(java.lang.String)
//  .environmentScope(java.lang.String)
//  .hidden(java.lang.Boolean|IResolvable)
//  .masked(java.lang.Boolean|IResolvable)
//  .protected(java.lang.Boolean|IResolvable)
//  .raw(java.lang.Boolean|IResolvable)
//  .variableType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.key">key</a></code> | <code>java.lang.String</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.project">project</a></code> | <code>java.lang.String</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.environmentScope">environmentScope</a></code> | <code>java.lang.String</code> | The environment scope of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.hidden">hidden</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the value of the variable will be hidden in the CI/CD User Interface. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.masked">masked</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the value of the variable will be masked in job logs. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.protected">protected</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the variable will be passed only to pipelines running on protected branches and tags. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.raw">raw</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the variable is treated as a raw string. When true, variables in the value are not expanded. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.variableType">variableType</a></code> | <code>java.lang.String</code> | The type of a variable. Valid values are: `env_var`, `file`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#key ProjectVariable#key}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#project ProjectVariable#project}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#value ProjectVariable#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#description ProjectVariable#description}

---

##### `environmentScope`<sup>Optional</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.environmentScope"></a>

```java
public java.lang.String getEnvironmentScope();
```

- *Type:* java.lang.String

The environment scope of the variable.

Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#environment_scope ProjectVariable#environment_scope}

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.hidden"></a>

```java
public java.lang.Boolean|IResolvable getHidden();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to `true`, the value of the variable will be hidden in the CI/CD User Interface.

The value must meet the [hidden requirements](https://docs.gitlab.com/ci/variables/#hide-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#hidden ProjectVariable#hidden}

---

##### `masked`<sup>Optional</sup> <a name="masked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.masked"></a>

```java
public java.lang.Boolean|IResolvable getMasked();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to `true`, the value of the variable will be masked in job logs.

The value must meet the [masking requirements](https://docs.gitlab.com/ee/ci/variables/#mask-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#masked ProjectVariable#masked}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.protected"></a>

```java
public java.lang.Boolean|IResolvable getProtected();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to `true`, the variable will be passed only to pipelines running on protected branches and tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#protected ProjectVariable#protected}

---

##### `raw`<sup>Optional</sup> <a name="raw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.raw"></a>

```java
public java.lang.Boolean|IResolvable getRaw();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the variable is treated as a raw string. When true, variables in the value are not expanded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#raw ProjectVariable#raw}

---

##### `variableType`<sup>Optional</sup> <a name="variableType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

The type of a variable. Valid values are: `env_var`, `file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_variable#variable_type ProjectVariable#variable_type}

---



