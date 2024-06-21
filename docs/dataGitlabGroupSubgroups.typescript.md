# `dataGitlabGroupSubgroups` Submodule <a name="`dataGitlabGroupSubgroups` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupSubgroups <a name="DataGitlabGroupSubgroups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups gitlab_group_subgroups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer"></a>

```typescript
import { dataGitlabGroupSubgroups } from '@cdktf/provider-gitlab'

new dataGitlabGroupSubgroups.DataGitlabGroupSubgroups(scope: Construct, id: string, config: DataGitlabGroupSubgroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig">DataGitlabGroupSubgroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig">DataGitlabGroupSubgroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetAllAvailable">resetAllAvailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetMinAccessLevel">resetMinAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOwned">resetOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSort">resetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetStatistics">resetStatistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetWithCustomAttributes">resetWithCustomAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllAvailable` <a name="resetAllAvailable" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetAllAvailable"></a>

```typescript
public resetAllAvailable(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinAccessLevel` <a name="resetMinAccessLevel" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetMinAccessLevel"></a>

```typescript
public resetMinAccessLevel(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetOwned` <a name="resetOwned" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOwned"></a>

```typescript
public resetOwned(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSort"></a>

```typescript
public resetSort(): void
```

##### `resetStatistics` <a name="resetStatistics" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetStatistics"></a>

```typescript
public resetStatistics(): void
```

##### `resetWithCustomAttributes` <a name="resetWithCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetWithCustomAttributes"></a>

```typescript
public resetWithCustomAttributes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabGroupSubgroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isConstruct"></a>

```typescript
import { dataGitlabGroupSubgroups } from '@cdktf/provider-gitlab'

dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformElement"></a>

```typescript
import { dataGitlabGroupSubgroups } from '@cdktf/provider-gitlab'

dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformDataSource"></a>

```typescript
import { dataGitlabGroupSubgroups } from '@cdktf/provider-gitlab'

dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport"></a>

```typescript
import { dataGitlabGroupSubgroups } from '@cdktf/provider-gitlab'

dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabGroupSubgroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabGroupSubgroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabGroupSubgroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupSubgroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.subgroups">subgroups</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList">DataGitlabGroupSubgroupsSubgroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.allAvailableInput">allAvailableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.minAccessLevelInput">minAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.ownedInput">ownedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.skipGroupsInput">skipGroupsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.sortInput">sortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.statisticsInput">statisticsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.withCustomAttributesInput">withCustomAttributesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.allAvailable">allAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.minAccessLevel">minAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.owned">owned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.skipGroups">skipGroups</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.sort">sort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.statistics">statistics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.withCustomAttributes">withCustomAttributes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `subgroups`<sup>Required</sup> <a name="subgroups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.subgroups"></a>

```typescript
public readonly subgroups: DataGitlabGroupSubgroupsSubgroupsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList">DataGitlabGroupSubgroupsSubgroupsList</a>

---

##### `allAvailableInput`<sup>Optional</sup> <a name="allAvailableInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.allAvailableInput"></a>

```typescript
public readonly allAvailableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `minAccessLevelInput`<sup>Optional</sup> <a name="minAccessLevelInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.minAccessLevelInput"></a>

```typescript
public readonly minAccessLevelInput: string;
```

- *Type:* string

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `ownedInput`<sup>Optional</sup> <a name="ownedInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.ownedInput"></a>

```typescript
public readonly ownedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: number[];
```

- *Type:* number[]

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.sortInput"></a>

```typescript
public readonly sortInput: string;
```

- *Type:* string

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.statisticsInput"></a>

```typescript
public readonly statisticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withCustomAttributesInput`<sup>Optional</sup> <a name="withCustomAttributesInput" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.withCustomAttributesInput"></a>

```typescript
public readonly withCustomAttributesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allAvailable`<sup>Required</sup> <a name="allAvailable" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.allAvailable"></a>

```typescript
public readonly allAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minAccessLevel`<sup>Required</sup> <a name="minAccessLevel" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.minAccessLevel"></a>

```typescript
public readonly minAccessLevel: string;
```

- *Type:* string

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `owned`<sup>Required</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.owned"></a>

```typescript
public readonly owned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.skipGroups"></a>

```typescript
public readonly skipGroups: number[];
```

- *Type:* number[]

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.statistics"></a>

```typescript
public readonly statistics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withCustomAttributes`<sup>Required</sup> <a name="withCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.withCustomAttributes"></a>

```typescript
public readonly withCustomAttributes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupSubgroupsConfig <a name="DataGitlabGroupSubgroupsConfig" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.Initializer"></a>

```typescript
import { dataGitlabGroupSubgroups } from '@cdktf/provider-gitlab'

const dataGitlabGroupSubgroupsConfig: dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.groupId">groupId</a></code> | <code>number</code> | The ID of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.allAvailable">allAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Show all the groups you have access to. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#id DataGitlabGroupSubgroups#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.minAccessLevel">minAccessLevel</a></code> | <code>string</code> | Limit to groups where current user has at least this access level. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.orderBy">orderBy</a></code> | <code>string</code> | Order groups by name, path or id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.owned">owned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Limit to groups explicitly owned by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.search">search</a></code> | <code>string</code> | Return the list of authorized groups matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.skipGroups">skipGroups</a></code> | <code>number[]</code> | Skip the group IDs passed. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.sort">sort</a></code> | <code>string</code> | Order groups in asc or desc order. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.statistics">statistics</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include group statistics (administrators only). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.withCustomAttributes">withCustomAttributes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include custom attributes in response (administrators only). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#group_id DataGitlabGroupSubgroups#group_id}

---

##### `allAvailable`<sup>Optional</sup> <a name="allAvailable" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.allAvailable"></a>

```typescript
public readonly allAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Show all the groups you have access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#all_available DataGitlabGroupSubgroups#all_available}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#id DataGitlabGroupSubgroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minAccessLevel`<sup>Optional</sup> <a name="minAccessLevel" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.minAccessLevel"></a>

```typescript
public readonly minAccessLevel: string;
```

- *Type:* string

Limit to groups where current user has at least this access level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#min_access_level DataGitlabGroupSubgroups#min_access_level}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

Order groups by name, path or id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#order_by DataGitlabGroupSubgroups#order_by}

---

##### `owned`<sup>Optional</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.owned"></a>

```typescript
public readonly owned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Limit to groups explicitly owned by the current user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#owned DataGitlabGroupSubgroups#owned}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Return the list of authorized groups matching the search criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#search DataGitlabGroupSubgroups#search}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: number[];
```

- *Type:* number[]

Skip the group IDs passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#skip_groups DataGitlabGroupSubgroups#skip_groups}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

Order groups in asc or desc order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#sort DataGitlabGroupSubgroups#sort}

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.statistics"></a>

```typescript
public readonly statistics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include group statistics (administrators only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#statistics DataGitlabGroupSubgroups#statistics}

---

##### `withCustomAttributes`<sup>Optional</sup> <a name="withCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.withCustomAttributes"></a>

```typescript
public readonly withCustomAttributes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include custom attributes in response (administrators only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/group_subgroups#with_custom_attributes DataGitlabGroupSubgroups#with_custom_attributes}

---

### DataGitlabGroupSubgroupsSubgroups <a name="DataGitlabGroupSubgroupsSubgroups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups.Initializer"></a>

```typescript
import { dataGitlabGroupSubgroups } from '@cdktf/provider-gitlab'

const dataGitlabGroupSubgroupsSubgroups: dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupSubgroupsSubgroupsList <a name="DataGitlabGroupSubgroupsSubgroupsList" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer"></a>

```typescript
import { dataGitlabGroupSubgroups } from '@cdktf/provider-gitlab'

new dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.get"></a>

```typescript
public get(index: number): DataGitlabGroupSubgroupsSubgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabGroupSubgroupsSubgroupsOutputReference <a name="DataGitlabGroupSubgroupsSubgroupsOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer"></a>

```typescript
import { dataGitlabGroupSubgroups } from '@cdktf/provider-gitlab'

new dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.defaultBranchProtection">defaultBranchProtection</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.emailsEnabled">emailsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fileTemplateProjectId">fileTemplateProjectId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fullPath">fullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.ipRestrictionRanges">ipRestrictionRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.lfsEnabled">lfsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.mentionsDisabled">mentionsDisabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.parentId">parentId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.projectCreationLevel">projectCreationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.sharedRunnersSetting">sharedRunnersSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.shareWithGroupLock">shareWithGroupLock</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.statistics">statistics</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.subgroupCreationLevel">subgroupCreationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups">DataGitlabGroupSubgroupsSubgroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `defaultBranchProtection`<sup>Required</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.defaultBranchProtection"></a>

```typescript
public readonly defaultBranchProtection: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailsEnabled`<sup>Required</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.emailsEnabled"></a>

```typescript
public readonly emailsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fileTemplateProjectId`<sup>Required</sup> <a name="fileTemplateProjectId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fileTemplateProjectId"></a>

```typescript
public readonly fileTemplateProjectId: number;
```

- *Type:* number

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fullPath"></a>

```typescript
public readonly fullPath: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `ipRestrictionRanges`<sup>Required</sup> <a name="ipRestrictionRanges" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.ipRestrictionRanges"></a>

```typescript
public readonly ipRestrictionRanges: string;
```

- *Type:* string

---

##### `lfsEnabled`<sup>Required</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.lfsEnabled"></a>

```typescript
public readonly lfsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mentionsDisabled`<sup>Required</sup> <a name="mentionsDisabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.mentionsDisabled"></a>

```typescript
public readonly mentionsDisabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.parentId"></a>

```typescript
public readonly parentId: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `projectCreationLevel`<sup>Required</sup> <a name="projectCreationLevel" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.projectCreationLevel"></a>

```typescript
public readonly projectCreationLevel: string;
```

- *Type:* string

---

##### `requestAccessEnabled`<sup>Required</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.requestAccessEnabled"></a>

```typescript
public readonly requestAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requireTwoFactorAuthentication`<sup>Required</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.requireTwoFactorAuthentication"></a>

```typescript
public readonly requireTwoFactorAuthentication: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sharedRunnersSetting`<sup>Required</sup> <a name="sharedRunnersSetting" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.sharedRunnersSetting"></a>

```typescript
public readonly sharedRunnersSetting: string;
```

- *Type:* string

---

##### `shareWithGroupLock`<sup>Required</sup> <a name="shareWithGroupLock" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.shareWithGroupLock"></a>

```typescript
public readonly shareWithGroupLock: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.statistics"></a>

```typescript
public readonly statistics: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `subgroupCreationLevel`<sup>Required</sup> <a name="subgroupCreationLevel" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.subgroupCreationLevel"></a>

```typescript
public readonly subgroupCreationLevel: string;
```

- *Type:* string

---

##### `twoFactorGracePeriod`<sup>Required</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.twoFactorGracePeriod"></a>

```typescript
public readonly twoFactorGracePeriod: number;
```

- *Type:* number

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `wikiAccessLevel`<sup>Required</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.wikiAccessLevel"></a>

```typescript
public readonly wikiAccessLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabGroupSubgroupsSubgroups;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups">DataGitlabGroupSubgroupsSubgroups</a>

---



