# `dataGitlabProjectEnvironments` Submodule <a name="`dataGitlabProjectEnvironments` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectEnvironments <a name="DataGitlabProjectEnvironments" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_environments gitlab_project_environments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.Initializer"></a>

```typescript
import { dataGitlabProjectEnvironments } from '@cdktf/provider-gitlab'

new dataGitlabProjectEnvironments.DataGitlabProjectEnvironments(scope: Construct, id: string, config: DataGitlabProjectEnvironmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig">DataGitlabProjectEnvironmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig">DataGitlabProjectEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.resetStates">resetStates</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetName` <a name="resetName" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetStates` <a name="resetStates" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.resetStates"></a>

```typescript
public resetStates(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isConstruct"></a>

```typescript
import { dataGitlabProjectEnvironments } from '@cdktf/provider-gitlab'

dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isTerraformElement"></a>

```typescript
import { dataGitlabProjectEnvironments } from '@cdktf/provider-gitlab'

dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isTerraformDataSource"></a>

```typescript
import { dataGitlabProjectEnvironments } from '@cdktf/provider-gitlab'

dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.generateConfigForImport"></a>

```typescript
import { dataGitlabProjectEnvironments } from '@cdktf/provider-gitlab'

dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabProjectEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjectEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjectEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.environments">environments</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList">DataGitlabProjectEnvironmentsEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.statesInput">statesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.states">states</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.environments"></a>

```typescript
public readonly environments: DataGitlabProjectEnvironmentsEnvironmentsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList">DataGitlabProjectEnvironmentsEnvironmentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `statesInput`<sup>Optional</sup> <a name="statesInput" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.statesInput"></a>

```typescript
public readonly statesInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `states`<sup>Required</sup> <a name="states" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.states"></a>

```typescript
public readonly states: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectEnvironmentsConfig <a name="DataGitlabProjectEnvironmentsConfig" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.Initializer"></a>

```typescript
import { dataGitlabProjectEnvironments } from '@cdktf/provider-gitlab'

const dataGitlabProjectEnvironmentsConfig: dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.project">project</a></code> | <code>string</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.name">name</a></code> | <code>string</code> | Return the environment with this name. Mutually exclusive with search. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.search">search</a></code> | <code>string</code> | Return list of environments matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.states">states</a></code> | <code>string</code> | List all environments that match the specified state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_environments#project DataGitlabProjectEnvironments#project}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Return the environment with this name. Mutually exclusive with search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_environments#name DataGitlabProjectEnvironments#name}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Return list of environments matching the search criteria.

Mutually exclusive with name. Must be at least 3 characters long. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_environments#search DataGitlabProjectEnvironments#search}

---

##### `states`<sup>Optional</sup> <a name="states" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsConfig.property.states"></a>

```typescript
public readonly states: string;
```

- *Type:* string

List all environments that match the specified state.

Valid values are `available`, `stopping`, `stopped`. Returns all environments if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_environments#states DataGitlabProjectEnvironments#states}

---

### DataGitlabProjectEnvironmentsEnvironments <a name="DataGitlabProjectEnvironmentsEnvironments" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironments.Initializer"></a>

```typescript
import { dataGitlabProjectEnvironments } from '@cdktf/provider-gitlab'

const dataGitlabProjectEnvironmentsEnvironments: dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironments = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectEnvironmentsEnvironmentsList <a name="DataGitlabProjectEnvironmentsEnvironmentsList" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.Initializer"></a>

```typescript
import { dataGitlabProjectEnvironments } from '@cdktf/provider-gitlab'

new dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.get"></a>

```typescript
public get(index: number): DataGitlabProjectEnvironmentsEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectEnvironmentsEnvironmentsOutputReference <a name="DataGitlabProjectEnvironmentsEnvironmentsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectEnvironments } from '@cdktf/provider-gitlab'

new dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.autoStopAt">autoStopAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.autoStopSetting">autoStopSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.clusterAgentId">clusterAgentId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.externalUrl">externalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.fluxResourcePath">fluxResourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironments">DataGitlabProjectEnvironmentsEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoStopAt`<sup>Required</sup> <a name="autoStopAt" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.autoStopAt"></a>

```typescript
public readonly autoStopAt: string;
```

- *Type:* string

---

##### `autoStopSetting`<sup>Required</sup> <a name="autoStopSetting" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.autoStopSetting"></a>

```typescript
public readonly autoStopSetting: string;
```

- *Type:* string

---

##### `clusterAgentId`<sup>Required</sup> <a name="clusterAgentId" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.clusterAgentId"></a>

```typescript
public readonly clusterAgentId: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalUrl`<sup>Required</sup> <a name="externalUrl" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.externalUrl"></a>

```typescript
public readonly externalUrl: string;
```

- *Type:* string

---

##### `fluxResourcePath`<sup>Required</sup> <a name="fluxResourcePath" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.fluxResourcePath"></a>

```typescript
public readonly fluxResourcePath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectEnvironmentsEnvironments;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectEnvironments.DataGitlabProjectEnvironmentsEnvironments">DataGitlabProjectEnvironmentsEnvironments</a>

---



